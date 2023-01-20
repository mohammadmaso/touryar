import { Spinner, Stack } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import CategoryCarousal from '../../components/carousals/CategoryCarousal';
import TripCategoryList from '../../components/lists/TripCategoryList';
import { WikiCategoryList } from '../../components/lists/WikiCategoryList';
import SectionHeader from '../../components/SectionHeader';
import {
  useAllArticleCategoryiesQuery,
  useAllTourCategoriesQuery,
  useAllTripCategoriesQuery,
} from '../../graphql/generated/types';

interface Props {
  listView?: boolean;
}

const TourCategoriesView = (props: Props) => {
  const { data, loading, error } = useAllTourCategoriesQuery();
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }
  if (props.listView) {
    return <TripCategoryList categories={data?.tourCategories?.edges} />;
  }
  return (
    <Stack>
      <SectionHeader title="دسته بندی تور‌ها" subTitle="تور برای هر سلیقه" />
      <CategoryCarousal categories={data?.tourCategories?.edges} />
    </Stack>
  );
};
export default TourCategoriesView;
