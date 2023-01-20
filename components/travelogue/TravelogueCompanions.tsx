import {
  Stack,
  Wrap,
  Text,
  Avatar,
  HStack,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { FiFeather, FiUsers } from 'react-icons/fi';
import { UserType } from '../../graphql/generated/types';

interface Props {
  companions: Maybe<
    {
      __typename?: 'UserTypeEdge' | undefined;
    } & {
      node?:
        | Maybe<
            {
              __typename?: 'UserType' | undefined;
            } & Pick<UserType, 'id' | 'username' | 'avatar'>
          >
        | undefined;
    }
  >[];
}

function CompanionCard(props: any) {
  return (
    <HStack
      align={'center'}
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      pr="1"
      pl="2"
      py="0"
      borderRadius="full"
      justifyContent="space-between"
    >
      <Avatar src={props.avatar} size="sm" ml="2" />
      <Text fontWeight={300} fontSize="sm" dir="ltr">
        {props.username}
      </Text>
    </HStack>
  );
}

const TravelogueCompanions = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiUsers />
        <Text fontWeight="extrabold">همراهان</Text>
      </Wrap>
      <Wrap>
        {props.companions.map((item) => (
          <CompanionCard key={item?.node?.id} {...item?.node} />
        ))}
      </Wrap>
    </Stack>
  );
};

export default TravelogueCompanions;
