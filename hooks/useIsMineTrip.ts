
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { useMeQuery } from '../graphql/generated/types';
import useIsSignedIn from './useIsSignedIn'



export function useIsMineTrip(username : string) {
  const {data, loading, error} = useMeQuery();

  if(loading){
    return false
  }
  if(error){
    return false
  }
  if(data?.me?.username == username){
    return true
  }

  return false
 
}