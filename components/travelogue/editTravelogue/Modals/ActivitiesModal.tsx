import {
  Modal,
  Input,
  Divider,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Wrap,
  Icon,
  Text,
  ModalCloseButton,
  ModalBody,
  Stack,
  InputGroup,
  InputRightElement,
  Spinner,
  ModalFooter,
  SimpleGrid,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FiShoppingBag, FiActivity } from 'react-icons/fi';
import ApiLoading from '../../../ApiLoading';
import {
  AllActivitiesQueryResult,
  TripActivitieType,
  TripActivitieTypeEdge,
} from '../../../../graphql/generated/types';
import { ActivityCard } from '../../../cards/ActivityCard';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions: { getAllActivitites: () => void };
  queries: { allActivititesQuery: AllActivitiesQueryResult };
  onAddActivity: any;
  onDeleteActivity: any;
  selected: TripActivitieTypeEdge[];
}

const ActivitiesModal = (props: Props) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value != null) {
    }
    setSearchInput(event.target.value);
  };

  const isActivitySelected = (id: string): boolean => {
    if (props.selected?.filter((item) => item.node?.id === id).length == 1) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (props.isOpen == true) {
      props.actions?.getAllActivitites();
    }
  }, [props.isOpen]);

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
            <Icon as={FiActivity} />
            <Text>فعالیت‌ها</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Stack>
            {/* <InputGroup>
              {props.queries?.allActivititesQuery?.loading && (
                <InputRightElement pointerEvents="none" color="gray.300">
                  <Spinner size="sm" />
                </InputRightElement>
              )}

              <Input
                placeholder="نام فعالیت"
                value={searchInput}
                onChange={handleSearchInputChange}
              />
            </InputGroup> */}
            <Divider />
            {props.queries.allActivititesQuery.loading && (
              <ApiLoading enhanced={true} />
            )}
            <SimpleGrid
              spacing="3"
              columns={{ base: 3, sm: 4, md: 4 }}
              justifyContent="center"
            >
              {props.queries?.allActivititesQuery?.data?.allActivities?.edges.map(
                (item) => (
                  <ActivityCard
                    key={item?.node?.id!}
                    id={item?.node?.id!}
                    title={item?.node?.titleFa!}
                    svg={item?.node?.svg!}
                    isSelected={isActivitySelected(item?.node?.id!)}
                    onToggle={
                      isActivitySelected(item?.node?.id!)
                        ? props.onDeleteActivity
                        : props.onAddActivity
                    }
                  />
                )
              )}
            </SimpleGrid>
          </Stack>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ActivitiesModal;
