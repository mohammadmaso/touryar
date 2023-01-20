import {
  Container,
  Flex,
  Heading,
  Stack,
  Wrap,
  WrapItem,
  Divider,
  TagRightIcon,
  TagLabel,
  Box,
  useEventListener,
} from '@chakra-ui/react';
import React from 'react';

import BaseLayout from '../../layouts/BaseLayout';

import { ArticleHeader } from '../../components/article/ArticleHeader';
import ArticleActivities from '../../components/article/ArticleActivities';
import ArticleAccessories from '../../components/article/ArticleAccessories';
import { ArticleDescription } from '../../components/article/ArticleDescription';
import { ArticleContent } from '../../components/article/ArticleContent';
import { ArticlePlaces } from '../../components/article/ArticlePlaces';
import ArticleView from '../../views/article/ArticleView';
import { useRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import { client } from '../../graphql/ApolloLink';
import { ArticleDocument } from '../../graphql/generated/types';

export default function Travelogue(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <BaseLayout>
      <ArticleView data={props.data} />
    </BaseLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { data, loading, error } = await client.query({
    query: ArticleDocument,
    variables: {
      articleId: context.query.id,
    },
  });
  // Pass travelogue data to the page via props
  return { props: { data } };
};
