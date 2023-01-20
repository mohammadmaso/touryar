import React, { useEffect } from 'react';
import {
  Heading,
  Avatar,
  Box,
  Center,
  Image,
  Flex,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Tag,
  Wrap,
  Divider,
} from '@chakra-ui/react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import { MeDetailQuery, UserNode } from '../../graphql/generated/types';
import Head from 'next/head';
import { useIsTourLeader } from '../../hooks/useIsTourLeader';
interface Props {
  data: any;
  isSelf: boolean;
  actions: any;
  lazyQueries: any;
  isFollowed: boolean;
}

const ProfileContainer = (props: Props) => {
  const isTourLeader = useIsTourLeader();

  useEffect(() => {
    if (isTourLeader) {
      props.actions.getTourLeaderDetail();
    }
  }, [isTourLeader]);

  return (
    <div>
      <Box
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'lg'}
        rounded={'md'}
        overflow={'hidden'}
        mb="8"
      >
        <ProfileHeader
          isTourLeader={isTourLeader}
          isSelf={props.isSelf}
          data={props.isSelf ? props.data?.me : props.data?.user}
          isFollowed={props.isFollowed}
          actions={props.actions}
          lazyQueries={props.lazyQueries}
        />
        <Divider mb="5" />
        <ProfileTabs
          isTourLeader={isTourLeader}
          trips={
            props.isSelf
              ? props.data?.me?.trips.edges
              : props.data?.user?.trips.edges
          }
          actions={props.actions}
          queries={props.lazyQueries}
          isSelf={props.isSelf}
        />
      </Box>
    </div>
  );
};

export default ProfileContainer;
