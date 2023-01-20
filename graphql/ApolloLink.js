import { ApolloClient, ApolloLink, fromPromise, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { relayStylePagination } from "@apollo/client/utilities";
import { createStandaloneToast } from "@chakra-ui/react";
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client';
import introspectionResult from './fragment-matcher';
import { RefreshTokenDocument } from "./generated/types";

import { RetryLink } from "@apollo/client/link/retry";


const retryLink = new RetryLink({
  delay: {
    initial: 300,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 5,
    retryIf: (error, _operation) => !!error
  }
});

const toast = createStandaloneToast()

export const getNewToken = async () => {
  const refreshToken = localStorage.getItem('refresh-token')
  return client.mutate({ mutation: RefreshTokenDocument, variables:{refreshTokenRefreshToken : refreshToken} }).then((response) => {
    // extract your accessToken from your response data and return it
    return response.data.refreshToken;
  });
};

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward, error }) => {
      console.log("ERROR in SigninBox ", { error });
    if (graphQLErrors) {
      for (let err of graphQLErrors) {
        switch (err.extensions?.code) {
          case 'UNAUTHENTICATED':
            return fromPromise(
              getNewToken().catch((error) => {
                // Handle token refresh errors e.g clear stored tokens, redirect to login
                console.error(error);
                localStorage.removeItem('token');
                localStorage.removeItem('refresh-token');
                return;
              })
            )
              .filter((value) => Boolean(value))
              .flatMap(({token, payload, refreshToken}) => {
                console.log(refreshToken)
                localStorage.setItem('token', token );
                localStorage.setItem('refresh-token',refreshToken);
                const oldHeaders = operation.getContext().headers;
                // modify the operation context with a new token
                operation.setContext({
                  headers: {
                    ...oldHeaders,
                    authorization: `JWT ${token}`,
                  },
                });

                // retry the request, returning the new observable
                return forward(operation);
              });
        }
        //   if(err.extensions?.code != "UNAUTHENTICATED"){
        // toast({
        //           title: err.message,
        //           // description:
        //           //   'برای اضافه کردن نقد و بررسی باید کاربر سایت باشید، ثبت‌نام کنید یا وارد شوید.',
        //           status: 'error',
        //           duration: 4000,
        //           isClosable: true,
        //           position: 'top-right',
        //         });}

      }
    }
  if (networkError) console.log({networkError});


  },


);



const httpLink = createUploadLink({
  ssrMode: typeof window === "undefined",
  uri: "https://service.mytripper.ir/api/", 
  // fetchOptions: {
  //   mode: 'cors',
  // },
  // credentials: 'include'
  
});



const authLink = setContext( (_, { headers }) =>  {
  // get the authentication token from local storage if it exists
  
  const ISSERVER = typeof window === "undefined";

  // return the headers to the context so httpLink can read them
  if(!ISSERVER){
    return {
      headers: {
        ...headers,
        authorization: `JWT ${localStorage.getItem('token')}`,
      },
    };
  }
  else {
    return  {
      headers: {
        ...headers,
      },
    };
  }
  
});
const cache = new InMemoryCache({    
  possibleTypes: introspectionResult.possibleTypes,
  typePolicies: {
    Query: {
      fields: {
        allArticle: relayStylePagination(),
       
      },
    },
    UserType:{ 
       merge: true,
    },
        
  },
}
);


export const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  // to use errorLink functinality
  link: ApolloLink.from([retryLink, errorLink, authLink, httpLink]),
  
  cache: cache
});