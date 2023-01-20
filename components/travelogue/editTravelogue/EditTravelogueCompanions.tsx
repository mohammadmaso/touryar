import { CloseIcon } from '@chakra-ui/icons';
import {
  Stack,
  Wrap,
  Text,
  Avatar,
  HStack,
  Flex,
  Icon,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import {
  FiDelete,
  FiFeather,
  FiTrash,
  FiTrash2,
  FiUsers,
} from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { UserType } from '../../../graphql/generated/types';
import AddEditButton from './AddEditButton';

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
  onAddButtonClick: () => void;
  onDeleteClick: any;
}

function CompanionCard(props: any) {
  return (
    <HStack
      align={'center'}
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      pr="0"
      pl="0"
      py="0"
      borderRadius="full"
      justifyContent="space-between"
    >
      <Avatar src={props.avatar} size="sm" ml="2" />
      <Text fontWeight={300} fontSize="sm" dir="ltr">
        {props.username}
      </Text>
      <IconButton
        aria-label="حذف"
        rounded="full"
        variant="ghost"
        colorScheme="red"
        icon={<IoClose />}
        onClick={() => props.onDeleteClick(props.id)}
      />
    </HStack>
  );
}

const EditTravelogueCompanions = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiUsers />
        <Text fontWeight="extrabold">همراهان</Text>
        <AddEditButton onClick={props.onAddButtonClick} mode="add" />
      </Wrap>
      <Wrap>
        {props.companions.map((item) => (
          <CompanionCard
            key={item?.node?.id}
            {...item?.node}
            onDeleteClick={props.onDeleteClick}
          />
        ))}
      </Wrap>
    </Stack>
  );
};

export default EditTravelogueCompanions;
