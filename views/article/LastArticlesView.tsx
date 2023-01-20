import { Stack } from '@chakra-ui/react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import WikiCarusal from '../../components/carousals/WikiCarousal';
import SectionHeader from '../../components/SectionHeader';
import { useAllArticleQuery } from '../../graphql/generated/types';

interface Props {}

const LastArticlesView = (props: Props) => {
  const { data, loading, error } = useAllArticleQuery({
    variables: { allArticleLast: 10 },
  });
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <Stack pt="2">
      <SectionHeader
        title="آخرین مقاله‌ها"
        subTitle="در دانشنامه‌ی توریار توریار یاد بگیرید"
      />
      <WikiCarusal data={data} />
    </Stack>
  );
};

export default LastArticlesView;
