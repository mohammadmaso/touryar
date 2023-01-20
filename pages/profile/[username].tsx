import { useRouter } from 'next/router';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next/types';
import React from 'react';
import { client } from '../../graphql/ApolloLink';
import { UserDetailDocument } from '../../graphql/generated/types';

import BaseLayout from '../../layouts/BaseLayout';
import ProfileDetailView from '../../views/profile/ProfileDetailView';

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <BaseLayout>
      <ProfileDetailView data={props.data} />
    </BaseLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const { data, loading, error } = await client.query({
    query: UserDetailDocument,
    variables: {
      username: context.query.username,
    },
  });
  // Pass travelogue data to the page via props
  return { props: { data } };
};
