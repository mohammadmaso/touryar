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
  Icon,
  Wrap,
  Center,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Box,
  useToast,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  InputGroup,
  InputRightElement,
  Spinner,
  Divider,
  Flex,
  Avatar,
  IconButton,
} from '@chakra-ui/react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import {
  CreateTripReviewMutation,
  SearchUsernameQuery,
  SearchUsernameQueryResult,
  useMeFollowingsQuery,
  UserTypeEdge,
} from '../../../../graphql/generated/types';
import ApiLoading from '../../../ApiLoading';
import UserSimpleListCard from '../../../cards/UserSimpleListCard';

import * as Yup from 'yup';
import { FetchResult } from '@apollo/client/link/core/types';
import { FiPlus, FiUserPlus, FiUsers } from 'react-icons/fi';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions: { searchUsername: (username: string) => void };
  queries: { searchUsernameQuery: SearchUsernameQueryResult };
  onAddUser: any;
  selected: UserTypeEdge[];
}

const AddCompanionModal = (props: Props) => {
  const toast = useToast();
  const [username, setUsername] = useState('');
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.actions?.searchUsername(event.target.value);
    setUsername(event.target.value);
  };
  const isUserSelected = (id: string): boolean => {
    if (props.selected?.filter((item) => item.node?.id === id).length == 1) {
      return true;
    }
    return false;
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="lg"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader fontWeight="light">
          <Wrap align="center">
            <Icon as={FiUserPlus} />
            <Text>افزودن همراه</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Tabs colorScheme="primary" size="sm">
            <TabList>
              <Tab>جستجو</Tab>
              <Tab>دنبال شده‌ها</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Stack>
                  <InputGroup>
                    {props.queries?.searchUsernameQuery?.loading && (
                      <InputRightElement pointerEvents="none" color="gray.300">
                        <Spinner size="sm" />
                      </InputRightElement>
                    )}

                    <Input
                      placeholder="جستجو با نام کاربری"
                      value={username}
                      onChange={handleSearchInputChange}
                    />
                  </InputGroup>
                  <Divider />
                  {props.queries?.searchUsernameQuery.data?.allUsers?.edges
                    ?.length != 0 ? (
                    <Stack spacing="3">
                      {props.queries?.searchUsernameQuery.data?.allUsers?.edges.map(
                        (item) => (
                          <Box
                            key={item?.node?.id}
                            rounded="md"
                            p="2"
                            cursor="pointer"
                          >
                            <Flex justifyContent="space-between">
                              <Wrap align="center">
                                <Avatar src={item?.node?.avatar} />
                                <Text>{item?.node?.username}</Text>
                              </Wrap>
                              {isUserSelected(item?.node?.id!) ? (
                                <Button
                                  size="sm"
                                  colorScheme="gray"
                                  disabled={true}
                                >
                                  انتخاب شده
                                </Button>
                              ) : (
                                <IconButton
                                  aria-label="اضافه کردن"
                                  rounded="full"
                                  colorScheme="primary"
                                  icon={<FiPlus />}
                                  onClick={() => props.onAddUser(item?.node)}
                                />
                              )}
                            </Flex>
                          </Box>
                        )
                      )}
                    </Stack>
                  ) : (
                    <Text>موردی یافت نشد!</Text>
                  )}
                </Stack>
              </TabPanel>
              <TabPanel>
                <div>در دست توسعه</div>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddCompanionModal;
