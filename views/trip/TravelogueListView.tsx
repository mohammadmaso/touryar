import { Wrap, Divider, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import { FiArrowDown } from 'react-icons/fi';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import TripListCard from '../../components/cards/TripListCard';
import { TravelogueListHeader } from '../../components/travelogue/TravelogueListHeader';
import {
  TripType,
  useAllProvincesOfCountryLazyQuery,
  useAllTripCategoriesQuery,
  useAllTripListQuery,
  useAllTripQuery,
} from '../../graphql/generated/types';

interface Props {}

const TravelogueListView = (props: Props) => {
  const { data, loading, error, refetch } = useAllTripListQuery({
    variables: { allTripLast: 10 },
  });

  const [
    getProvincesOfCountry,
    provincesOfCountryQuery,
  ] = useAllProvincesOfCountryLazyQuery();

  const categoriesQuery = useAllTripCategoriesQuery();

  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <Stack spacing="4">
      <TravelogueListHeader
        queries={{ provincesOfCountryQuery, categoriesQuery }}
        actions={{
          getProvincesOfCountry: (countryId: string) =>
            getProvincesOfCountry({
              variables: { allProvincesCountry: countryId },
            }),
        }}
        onCategoryChange={(categoryId) =>
          refetch({ allTripLast: 10, allTripCategories: [[categoryId]] })
        }
        onProvinceChange={(provinceId) => null}
      />
      <Wrap spacing="3" mb="4" justifyContent="center">
        <Divider />
        {data?.allTrip?.edges.map((item) => (
          <TripListCard key={item?.node?.id} data={item?.node as TripType} />
        ))}
        <Button
          colorScheme="primary"
          rounded="full"
          rightIcon={<FiArrowDown />}
        >
          نتایج بیشتر
        </Button>
      </Wrap>
    </Stack>
  );
};

export default TravelogueListView;
