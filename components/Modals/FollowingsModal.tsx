import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Stack,
} from '@chakra-ui/react';
import React from 'react';
import { useMeFollowingsQuery } from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import UserSimpleListCard from '../cards/UserSimpleListCard';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions: any;
  queries: any;
  isSelf: boolean;
}

const FollowingsModal = (props: Props) => {
  const followingsEdges = props.isSelf
    ? props.queries?.followingsQuery?.data?.me?.followingUsers.edges
    : props.queries?.followingsQuery?.data?.user?.followingUsers.edges;

  return (
    <div>
      <Modal isOpen={props.isOpen} onClose={props.onClose}>
        <ModalOverlay />
        <ModalContent rounded="none">
          <ModalHeader>دنبال‌شده‌ها</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {props.queries?.followingsQuery?.loading ? (
              <ApiLoading enhanced={true} />
            ) : followingsEdges?.length != 0 ? (
              <Stack spacing="3">
                {followingsEdges?.map((item: any) => (
                  <UserSimpleListCard
                    key={item?.node?.followed.id}
                    {...item?.node?.followed}
                  />
                ))}
              </Stack>
            ) : (
              <Text>موردی یافت نشد!</Text>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default FollowingsModal;
