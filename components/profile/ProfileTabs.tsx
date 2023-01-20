import {
  SimpleGrid,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react';
import ApiLoading from '../ApiLoading';
import TripSmallCard from '../cards/TripSmallCard';
import TripList from '../lists/TripList';

interface Props {
  isTourLeader: boolean;
  trips: any;
  actions: any;
  queries?: any;
  isSelf: boolean;
}

const ProfileTabs = (props: Props) => {
  return (
    <Tabs colorScheme="primary" size="sm" variant="soft-rounded">
      <TabList
        overflowX={{ base: 'scroll', sm: 'scroll', md: 'hidden', lg: 'hidden' }}
        overflowY="hidden"
        mx="2"
      >
        {/* {props.isSelf && (
          <Tab onClick={() => props.actions.getUnpublishedTrips()}>
            تور‌های ثبت‌نامی
          </Tab>
        )}
        {props.isSelf && props.isTourLeader && (
          <Tab onClick={() => props.actions.getUnpublishedTrips()}>
            تور‌های من
          </Tab>
        )}
        {props.isTourLeader && (
          <Tab onClick={() => props.actions.getUnpublishedTrips()}>
            تورهای آتی
          </Tab>
        )}
        {props.isTourLeader && (
          <Tab onClick={() => props.actions.getUnpublishedTrips()}>
            تور‌های برگزار شده
          </Tab>
        )} */}
        <Tab id="trips">تورها</Tab>
        {props.isSelf && (
          <Tab onClick={() => props.actions.getUnpublishedTrips()}>
            تورهای منتشر نشده
          </Tab>
        )}
        {props.isSelf && <Tab>تورهای موردعلاقه </Tab>}
        <Tab isDisabled>دست‌آوردها</Tab>
      </TabList>

      <TabPanels>
        {/* {props.isSelf && (
          <TabPanel>
            <MyToursTab />
          </TabPanel>
        )}
        {props.isSelf && props.isTourLeader && (
          <TabPanel>
            <ManageToureTab />
          </TabPanel>
        )}
        {props.isTourLeader && (
          <TabPanel>
            <div></div>
          </TabPanel>
        )}
        {props.isTourLeader && <TabPanel></TabPanel>} */}

        <TabPanel>
          <TripList
            data={props.trips}
            queries={props.queries}
            actions={props.actions}
          />
        </TabPanel>
        {props.isSelf && (
          <TabPanel>
            {props.queries?.unpublishedTripsQuery?.loading ? (
              <ApiLoading enhanced={true} />
            ) : props.queries?.unpublishedTripsQuery?.data?.allMyTrip?.edges
                .length != 0 ? (
              <SimpleGrid
                spacing="2"
                columns={{ base: 1, sm: 1, md: 4 }}
                justifyContent="center"
              >
                {props.queries?.unpublishedTripsQuery?.data?.allMyTrip?.edges?.map(
                  (item: any) => (
                    <TripSmallCard
                      key={item!.node?.id!}
                      data={item?.node}
                      queries={props.queries}
                      actions={props.actions}
                    />
                  )
                )}
              </SimpleGrid>
            ) : (
              <Text>موردی یافت نشد!</Text>
            )}
          </TabPanel>
        )}
        {props.isSelf && (
          <TabPanel>
            {props.queries?.savedTripsQuery?.loading ? (
              <ApiLoading enhanced={true} />
            ) : props.queries?.savedTripsQuery?.data?.myTripCollection?.edges
                .length != 0 ? (
              <SimpleGrid
                spacing="2"
                columns={{ base: 1, sm: 1, md: 4 }}
                justifyContent="center"
              >
                {props.queries?.savedTripsQuery?.data?.myTripCollection?.edges?.map(
                  (item: any) => (
                    <TripSmallCard
                      key={item!.node?.trip.id!}
                      data={item?.node?.trip}
                      queries={props.queries}
                      actions={props.actions}
                    />
                  )
                )}
              </SimpleGrid>
            ) : (
              <Text>موردی یافت نشد!</Text>
            )}
          </TabPanel>
        )}
        <TabPanel>
          <>two!</>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProfileTabs;
