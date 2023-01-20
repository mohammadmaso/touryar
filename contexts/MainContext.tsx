import { ApolloQueryResult } from '@apollo/client/core/types';
import React, { ReactChildren, ReactElement } from 'react';
import { client } from '../graphql/ApolloLink';
import {
  MeDocument,
  MeQuery,
  namedOperations,
  useMeQuery,
} from '../graphql/generated/types';

interface Props {
  children: ReactElement;
}

// const userData =  client.query({
//   query: MeDocument,
// });

export const UserContext = React.createContext<any>(null);

const MainContext = (props: Props) => {
  const { loading, error, data } = useMeQuery();

  return (
    <>
      <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
    </>
  );
};

export default MainContext;
