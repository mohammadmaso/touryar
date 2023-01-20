import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import ProfileContainer from '../../components/profile/ProfileContainer';
import {
  useFollowOrUnfollowMutation,
  useIsFollowedQuery,
  UserDetailQuery,
  useTourLeaderDetailLazyQuery,
  useUserFollowersLazyQuery,
  useUserFollowingsLazyQuery,
} from '../../graphql/generated/types';
import siteConfig from '../../site.config';

interface Props {
  data: UserDetailQuery;
}

const ProfileDetailView = ({ data }: Props) => {
  // const { data, loading, error } = useUserDetailQuery({
  //   variables: { username: props.username, followedUsername: props.username },
  // });
  const router = useRouter();

  const [getTourLeaderDetail, tourLeaderDetailQuery] =
    useTourLeaderDetailLazyQuery({
      fetchPolicy: 'no-cache',
    });

  const { data: isFollowed } = useIsFollowedQuery({
    variables: { followedUsername: data.user?.username! },
  });
  const [getFollowings, followingsQuery] = useUserFollowingsLazyQuery({
    variables: { username: data.user?.username! },
    fetchPolicy: 'no-cache',
  });
  const [getFollowers, followersQuery] = useUserFollowersLazyQuery({
    variables: { username: data.user?.username! },
    fetchPolicy: 'no-cache',
  });

  const [followOrUnfollow, followOrUnfollowMutation] =
    useFollowOrUnfollowMutation({
      variables: {
        followOrUnfollowInput: {
          followedId: data?.user?.id!,
        },
      },
      // refetchQueries: [namedOperations.Query.UserDetail],
    });
  // const isFollowedQuery = useIsFollowedQuery({ variables: { followedUserId: props.id } });

  // if (loading) {
  //   return <ApiLoading enhanced={true} />;
  // }
  // if (error) {
  //   return <ApiError />;
  // }
  return (
    <div>
      <DefaultSeo
        title={data?.user?.username}
        titleTemplate="توریار | %s"
        defaultTitle="توریار"
        // titleTemplate={`%s · ${siteConfig.title}`}
        description={data?.user?.profilemodel?.about!}
        canonical={siteConfig.url + (router.asPath || '')}
        openGraph={{
          title: data?.user?.username,
          description: data?.user?.profilemodel?.about!,
          type: 'website',
          site_name: siteConfig.title!,
          profile: {
            username: data?.user?.username,
          },
          images: [
            {
              url: data.user?.avatar!,
              width: 512,
              height: 512,
              alt: data.user?.avatar!,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
          handle: siteConfig.twitterUsername,
          site: siteConfig.twitterUsername,
        }}
      />

      <ProfileContainer
        data={data}
        isFollowed={isFollowed as boolean}
        isSelf={false}
        actions={{
          getTourLeaderDetail: () => getTourLeaderDetail(),
          getFollowings: () => getFollowings(),
          getFollowers: () => getFollowers(),
          followOrUnfollow: () => followOrUnfollow(),
        }}
        lazyQueries={{
          followingsQuery,
          followersQuery,
          followOrUnfollowMutation,
          tourLeaderDetailQuery,
        }}
      />
    </div>
  );
};

export default ProfileDetailView;
