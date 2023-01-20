
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useMeQuery } from '../graphql/generated/types';


export default function useIsSignedIn() {
  const router = useRouter();

  const { data, loading } = useMeQuery();

  let isSignedIn

  isSignedIn = (data?.me?.id ? true : false) 


  const goToSignUp = () =>{ 
    router.replace("/auth/login?next=" + router.pathname);
  }

 
  return {goToSignUp, isSignedIn}
}