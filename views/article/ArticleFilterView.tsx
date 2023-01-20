import React from 'react';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import WikiCarusal from '../../components/carousals/WikiCarousal';
import WikiList from '../../components/lists/WikiList';
import { useAllArticleQuery } from '../../graphql/generated/types';

interface Props {
  categoryId: string;
}

const ArticleFilterView = (props: Props) => {
  const { data, loading, error } = useAllArticleQuery({
    variables: { allArticleCategory: props.categoryId },
    fetchPolicy: 'no-cache',
  });
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <div>
      <WikiList
        category={data?.allArticle?.edges[0]?.node?.category?.title as string}
        data={data}
      />
    </div>
  );
};

export default ArticleFilterView;
