import { Spinner } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import CategoryCarousal from '../../components/carousals/CategoryCarousal';
import TripCategoryList from '../../components/lists/TripCategoryList';
import { WikiCategoryList } from '../../components/lists/WikiCategoryList';
import {
  useAllArticleCategoryiesQuery,
  useAllProfilesQuery,
  useAllTripCategoriesQuery,
} from '../../graphql/generated/types';
import TravelerList from '../../components/lists/TravelerList';

interface Props {
  listView?: boolean;
}

const TravelersView = (props: Props) => {
  const { data, loading, error } = useAllProfilesQuery();
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <>
      <TravelerList profiles={data?.allUsers?.edges} />
    </>
  );
};
export default TravelersView;
