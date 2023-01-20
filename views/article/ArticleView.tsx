import { Divider, Flex, Stack, Wrap } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import ArticleAccessories from '../../components/article/ArticleAccessories';
import ArticleActivities from '../../components/article/ArticleActivities';
import { ArticleContent } from '../../components/article/ArticleContent';
import { ArticleDescription } from '../../components/article/ArticleDescription';
import { ArticleHeader } from '../../components/article/ArticleHeader';
import { ArticlePlaces } from '../../components/article/ArticlePlaces';
import { ArticleQuery } from '../../graphql/generated/types';
import siteConfig from '../../site.config';

interface Props {
  data: ArticleQuery;
}

const ArticleView = ({ data }: Props) => {
  // const { data, loading, error } = useArticleQuery({
  //   variables: { articleId: props.id },
  // });
  // if (loading) {
  //   return <ApiLoading enhanced={true} />;
  // }
  // if (error) {
  //   return <ApiError />;
  // }
  const router = useRouter();

  return (
    <>
      <DefaultSeo
        title={data?.article?.title}
        titleTemplate="توریار | %s"
        defaultTitle="توریار"
        // titleTemplate={`%s · ${siteConfig.title}`}
        description={data?.article?.shortDescription!}
        canonical={siteConfig.url + (router.asPath || '')}
        openGraph={{
          title: data?.article?.title!,
          description: data?.article?.shortDescription!,
          type: 'website',
          site_name: siteConfig.title!,
          // profile: {
          //   username: data.trip?.author.username,
          // },
          images: [
            {
              url: data.article?.image!,
              width: 1024,
              height: 512,
              alt: data.article?.title!,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />
      <ArticleHeader
        title={data?.article?.title}
        category={data?.article?.category}
        author={data?.article?.author}
        timeToRead={data?.article?.timeToRead}
      />
      <Wrap>
        <Divider />
        <Flex direction={{ base: 'column', md: 'row', lg: 'row' }} w="full">
          <Wrap flex="2">
            <Stack pl={{ base: '0', md: '5', lg: '5' }} spacing="4">
              <ArticleDescription
                shortDescription={data?.article?.shortDescription}
              />

              {data?.article?.places.edges.length != 0 ? (
                <>
                  <Divider /> <ArticlePlaces />
                </>
              ) : null}

              <Divider />
              <ArticleContent content={data?.article?.content} />
            </Stack>
          </Wrap>

          <Wrap flex="1" pt={{ base: '5', md: '0', lg: '0' }}>
            <Stack pr={{ base: '0', md: '5', lg: '5' }} spacing="4">
              {data?.article?.activities.edges.length != 0 ? (
                <>
                  <ArticleActivities data={data?.article?.activities.edges} />
                  <Divider />
                </>
              ) : null}
              {data?.article?.accessories.edges.length != 0 ? (
                <>
                  <ArticleAccessories data={data?.article?.accessories.edges} />
                </>
              ) : null}
            </Stack>
          </Wrap>
        </Flex>
      </Wrap>
    </>
  );
};

export default ArticleView;
