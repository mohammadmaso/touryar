import { Spinner } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import CategoryCarousal from '../../components/carousals/CategoryCarousal';
import ActivitiesList from '../../components/lists/ActivitiesList';
import TripCategoryList from '../../components/lists/TripCategoryList';
import { WikiCategoryList } from '../../components/lists/WikiCategoryList';
import {
  useAllActivitiesQuery,
  useAllArticleCategoryiesQuery,
  useAllTripCategoriesQuery,
} from '../../graphql/generated/types';

interface Props {
  listView?: boolean;
}

const ActivitiesView = (props: Props) => {
  const { data, loading, error } = useAllActivitiesQuery();
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }
  if (props.listView) {
    return <ActivitiesList activities={data?.allActivities?.edges} />;
  }
  return (
    <>
      <ActivitiesList activities={data?.allActivities?.edges} />
    </>
  );
};
export default ActivitiesView;
