import { Spinner } from '@chakra-ui/react';
import React from 'react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import { WikiCategoryList } from '../../components/lists/WikiCategoryList';
import { useAllArticleCategoryiesQuery } from '../../graphql/generated/types';

const ArticleCategoriesView = () => {
  const { data, loading, error } = useAllArticleCategoryiesQuery();
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <>
      <WikiCategoryList categories={data?.allArticleCategories?.edges} />
    </>
  );
};
export default ArticleCategoriesView;
