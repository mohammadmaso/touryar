import { Stack } from '@chakra-ui/react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import CategoryCarousal from '../../components/carousals/CategoryCarousal';
import TripCategoryList from '../../components/lists/TripCategoryList';
import SectionHeader from '../../components/SectionHeader';
import { useAllTripCategoriesQuery } from '../../graphql/generated/types';

interface Props {
  listView?: boolean;
}

const TripCategoriesView = (props: Props) => {
  const { data, loading, error } = useAllTripCategoriesQuery();
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }
  if (props.listView) {
    return <TripCategoryList categories={data?.allTripCategories?.edges} />;
  }
  return (
    <Stack mt={'2'}>
      <SectionHeader
        title="موضوع تورها "
        subTitle="مسافران چه تورهایی رفتنه‌اند"
      />
      <CategoryCarousal categories={data?.allTripCategories?.edges} />
    </Stack>
  );
};
export default TripCategoriesView;
