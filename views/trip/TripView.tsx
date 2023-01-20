import { useToast } from '@chakra-ui/react';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import TravelogueContainer from '../../components/travelogue/TravelogueContainer';
import { TravelogueHeader } from '../../components/travelogue/TravelogueHeader';

import {
  namedOperations,
  TripDetailQuery,
  useCreateTripReviewMutation,
  useDeleteTripMutation,
  useLikeTripMutation,
  usePublisTripMutation,
  useSaveTripMutationMutation,
  useTripReviewsLazyQuery,
  useUnPublisTripMutation,
} from '../../graphql/generated/types';
import siteConfig from '../../site.config';
import { getDate, getDays } from '../../utils/time';

interface Props {
  id: string;
  data: TripDetailQuery;
  // loading: boolean;
  // error: ApolloError | undefined;
}

const TripView = ({ data, id }: Props) => {
  const router = useRouter();
  const toast = useToast();

  // const { data, loading, error } = useTripDetailQuery({
  //   variables: { tripId: id },
  // });

  const [getReviews, reviewsLazyQuery] = useTripReviewsLazyQuery({
    variables: { tripId: id },
    fetchPolicy: 'no-cache',
  });

  // const reviewsLazyQuery = useTripReviewsQuery({
  //   variables: { tripId: props.id },
  // });

  const [publishTrip, publishTripStatus] = usePublisTripMutation({
    variables: { tripId: id },
    // refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'تور با موفقیت منتشر شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'انتشار تور با خطا مواجه شد',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [unPublishTrip, unPublishTripStatus] = useUnPublisTripMutation({
    variables: { tripId: id },
    // refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'تور با موفقیت از حالت انتشار خارج شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'عملیات لغو انتشار تور با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [addReview, addReviewStatus] = useCreateTripReviewMutation({
    refetchQueries: [namedOperations.Query.TripReviews],
  });
  // must have refetch query to get like status
  const [likeTrip, likeTripStatus] = useLikeTripMutation({
    variables: { createTripLikeTripId: id },
    refetchQueries: [namedOperations.Query.TripDetailLikes],
  });

  const [saveTrip, saveTripStatus] = useSaveTripMutationMutation({
    variables: { saveTripTrip: id },
    awaitRefetchQueries: true,
    refetchQueries: [namedOperations.Query.MeSavedTrips],
  });

  const [deleteTrip, deleteTripStatus] = useDeleteTripMutation({
    variables: { deleteTripTripId: id },
    refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'تور با موفقیت حذف شد',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
      router.push('/me');
    },
    onError: () => {
      toast({
        title: 'حذف تور با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  // if (loading) {
  //   return <ApiLoading enhanced={true} />;
  // }
  // if (error) {
  //   return <ApiError />;
  // }

  return (
    <>
      <DefaultSeo
        title={data?.trip?.title}
        titleTemplate="توریار | %s"
        defaultTitle="توریار"
        // titleTemplate={`%s · ${siteConfig.title}`}
        description={data?.trip?.description!}
        canonical={siteConfig.url + (router.asPath || '')}
        openGraph={{
          title: data?.trip?.title!,
          description: data?.trip?.description!,
          type: 'website',
          site_name: siteConfig.title!,
          // profile: {
          //   username: data.trip?.author.username,
          // },
          images: [
            {
              url: data.trip?.defaultImage!,
              width: 1024,
              height: 512,
              alt: data.trip?.title!,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <TravelogueHeader
        id={data?.trip?.id as string}
        title={data?.trip?.title}
        categories={data?.trip?.categories.edges}
        author={data?.trip?.author}
        days={getDays(data?.trip?.startDate, data?.trip?.endDate)}
        date={getDate(data?.trip?.startDate)}
        country={data?.trip?.country.name as string}
        province={data?.trip?.province.name as string}
        likes={data?.trip?.likes as number}
        isLiked={data?.trip?.userLiked as boolean}
        isSaved={data?.trip?.userSaved as boolean}
        published={data?.trip?.published as boolean}
        actions={{
          likeTrip: () => likeTrip(),
          saveTrip: () => saveTrip(),
          deleteTrip: () => deleteTrip(),
          publishTrip: () => publishTrip(),
          unPublishTrip: () => unPublishTrip(),
        }}
        queries={{
          likeTripStatus,
          saveTripStatus,
          deleteTripStatus,
          unPublishTripStatus,
          publishTripStatus,
        }}
      />
      <TravelogueContainer
        actions={{
          getReviews: () => getReviews(),

          addReview: (id: string, review: string) =>
            addReview({
              variables: {
                createTripReviewInput: {
                  tripId: id,
                  description: review,
                },
              },
            }),
        }}
        data={data as TripDetailQuery}
        queries={{
          reviewsLazyQuery,
          addReviewStatus,
        }}
      />
    </>
  );
};

export default TripView;
