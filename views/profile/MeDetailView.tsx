import { Spinner } from '@chakra-ui/react';
import React from 'react';
import WikiCarusal from '../../components/carousals/WikiCarousal';
import ApiLoading from '../../components/ApiLoading';
import {
  namedOperations,
  UpdateProfileInput,
  UpdateUserInput,
  useAllArticleQuery,
  useLikeTripMutation,
  useMeDetailQuery,
  useMeFollowersLazyQuery,
  useMeFollowingsLazyQuery,
  useMeSavedTripsLazyQuery,
  useMeSavedTripsQuery,
  useMeTourLeaderLazyQuery,
  useMyTripsLazyQuery,
  usePasswordChangeMutation,
  useUpdateProfileMutation,
  useUpdateUserMutation,
  useUsernameChangeMutation,
} from '../../graphql/generated/types';
import ApiError from '../../components/ApiError';
import ProfileContainer from '../../components/profile/ProfileContainer';
import { object } from 'yup/lib/locale';

interface Props {}

const MeDetailView = (props: Props) => {
  const { data, loading, error } = useMeDetailQuery();

  const [getTourLeaderDetail, tourLeaderDetailQuery] = useMeTourLeaderLazyQuery(
    {
      fetchPolicy: 'no-cache',
    }
  );

  const [getUnpublishedTrips, unpublishedTripsQuery] = useMyTripsLazyQuery();
  const [getFollowings, followingsQuery] = useMeFollowingsLazyQuery({
    fetchPolicy: 'no-cache',
  });
  const [getFollowers, followersQuery] = useMeFollowersLazyQuery({
    fetchPolicy: 'no-cache',
  });
  const savedTripsQuery = useMeSavedTripsQuery();
  const [changeProfile, changeProfileQuery] = useUpdateProfileMutation();
  const [changeUser, changeUserQuery] = useUpdateUserMutation();
  const [changeUsername, changeUsernameQuery] = useUsernameChangeMutation();
  const [changePassword, changePasswordQuery] = usePasswordChangeMutation();

  const [likeTrip, likeTripStatus] = useLikeTripMutation();
  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }
  return (
    <div>
      <ProfileContainer
        isFollowed={false}
        data={data}
        isSelf={true}
        actions={{
          getTourLeaderDetail: () => getTourLeaderDetail(),
          getFollowings: () => getFollowings(),
          getFollowers: () => getFollowers(),
          getUnpublishedTrips: () =>
            getUnpublishedTrips({ variables: { published: false } }),
          // getSavedTrips: () => getSavedTrips(),
          changeProfile: (updateProfileInput: UpdateProfileInput) =>
            changeProfile({
              variables: { updateProfileInput },
              refetchQueries: [namedOperations.Query.MeDetail],
            }),
          changeUser: (updateUserInput: UpdateUserInput) =>
            changeUser({
              variables: { updateUserInput },
              refetchQueries: [namedOperations.Query.MeDetail],
            }),
          changeUsername: (username: string) =>
            changeUsername({
              variables: { username },
              refetchQueries: [namedOperations.Query.MeDetail],
            }),
          changePassword: (
            oldPassword: string,
            pnewPassword1: string,
            newPassword2: string
          ) =>
            changePassword({
              variables: {
                passwordChangeOldPassword: oldPassword,
                passwordChangeNewPassword1: pnewPassword1,
                passwordChangeNewPassword2: newPassword2,
              },
            }),
          likeTrip: (id: string) =>
            likeTrip({
              variables: { createTripLikeTripId: id },
              refetchQueries: [namedOperations.Query.TripDetailLikes],
            }),
        }}
        lazyQueries={{
          followingsQuery,
          followersQuery,
          savedTripsQuery,
          changeProfileQuery,
          likeTripStatus,
          changeUserQuery,
          changePasswordQuery,
          changeUsernameQuery,
          unpublishedTripsQuery,
          tourLeaderDetailQuery,
        }}
      />
    </div>
  );
};

export default MeDetailView;
