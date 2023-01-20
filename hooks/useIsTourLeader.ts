import { useMeQuery } from "../graphql/generated/types";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useIsTourLeader = () => {
  const { data, loading } = useMeQuery();
  const isTourLeader = false
  // const isTourLeader = data?.me?.userType == "T" ? true : false 
  return isTourLeader
};