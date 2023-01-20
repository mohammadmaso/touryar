import {
  Box,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  SimpleGrid,
  Spinner,
  Stack,
  Text,
  useToast,
  Wrap,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import {
  AccessoryTypeEdge,
  SearchAccessoryQueryResult,
} from '../../../../graphql/generated/types';

import { FiPlus, FiShoppingBag } from 'react-icons/fi';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions: { searchAccessory: (id: string, name: string) => void };
  queries: { searchAccessoryQuery: SearchAccessoryQueryResult };
  onAddAccessory: any;
  selected: AccessoryTypeEdge[];
}

const AddAccessoryModal = (props: Props) => {
  const toast = useToast();
  const [searchInput, setSearchInput] = useState('');
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value != null) {
      let input = event.target.value.match(/dkp-[0-9]*/gm);
      let id = '';
      let name = event.target.value;
      if (input) {
        id = input[0]?.substring(4, 11);
        name = '';
        console.log(id);
      }
      props.actions?.searchAccessory(id, name);
    }
    setSearchInput(event.target.value);
  };
  const isAccessorySelected = (id: string): boolean => {
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
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader fontWeight="light">
          <Wrap align="center">
            <Icon as={FiShoppingBag} />
            <Text>افزودن ملزومات تور</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Stack>
            <InputGroup>
              {props.queries?.searchAccessoryQuery?.loading && (
                <InputRightElement pointerEvents="none" color="gray.300">
                  <Spinner size="sm" />
                </InputRightElement>
              )}

              <Input
                placeholder="لینک محصول در دیجیکالا یا نام‌کالا"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
            </InputGroup>
            <Divider />
            {props.queries?.searchAccessoryQuery.data?.allAccessory?.edges
              ?.length != 0 ? (
              <SimpleGrid columns={{ base: 2, sm: 2, md: 2 }} spacing="3">
                {props.queries?.searchAccessoryQuery.data?.allAccessory?.edges.map(
                  (item) => (
                    <Box
                      key={item?.node?.id}
                      boxShadow="md"
                      p="2"
                      rounded="md"
                      fontSize="sm"
                      fontWeight="light"
                    >
                      <Stack spacing="3" justifyContent="space-between">
                        <Flex justifyContent="space-between">
                          <Image
                            h="1rem"
                            fit="contain"
                            src="/images/Digikala.png"
                            alt="digikala"
                            fallbackSrc="/images/placeholder.png"
                          />
                        </Flex>

                        <Image
                          fit="contain"
                          w="full"
                          src={item?.node?.imageLink!}
                          fallbackSrc="/images/placeholder.png"
                          alt="accessories"
                        />
                        <Text>{item?.node?.name}</Text>
                        <Button
                          size="sm"
                          fontWeight="light"
                          disabled={isAccessorySelected(item?.node?.id!)}
                          colorScheme="primary"
                          leftIcon={<FiPlus />}
                          onClick={() => props.onAddAccessory(item?.node)}
                        >
                          {isAccessorySelected(item?.node?.id!)
                            ? 'اضافه شده'
                            : 'اضافه کردن محصول'}
                        </Button>
                      </Stack>
                    </Box>
                  )
                )}
              </SimpleGrid>
            ) : (
              <Text>موردی یافت نشد!</Text>
            )}
          </Stack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AddAccessoryModal;
