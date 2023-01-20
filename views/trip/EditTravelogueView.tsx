import { useToast } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import ApiError from '../../components/ApiError';
import ApiLoading from '../../components/ApiLoading';
import EditTravelogueContainer from '../../components/travelogue/editTravelogue/EditTravelogueContainer';
import { EditTravelogueHeader } from '../../components/travelogue/editTravelogue/EditTravelogueHeader';
import {
  CreateExperienceImageMutationVariables,
  CreateExperinceMutationMutationVariables,
  CreateResidenceMutationVariables,
  CreateSinglTransferMutationVariables,
  namedOperations,
  TripDetailQuery,
  UpdateTripMutationVariables,
  useAllActivitiesLazyQuery,
  useAllCitiesOfProvinceLazyQuery,
  useAllCountriesQuery,
  useAllProvincesOfCountryLazyQuery,
  useAllTransferTypesLazyQuery,
  useAllTripCategoriesQuery,
  useCreateExperienceImageMutation,
  useCreateExperinceMutationMutation,
  useCreateResidenceMutation,
  useCreateSinglTransferMutation,
  useDeleteSingleTransferMutation,
  useDeleteTripMutation,
  useGetAllResidenceTypesLazyQuery,
  usePublisTripMutation,
  useSearchAccessoryLazyQuery,
  useSearchUsernameLazyQuery,
  useTripDetailQuery,
  useUnPublisTripMutation,
  useUpdateTripMutation,
} from '../../graphql/generated/types';
import { getDate, getDays } from '../../utils/time';

interface Props {
  id: string;
}

const EditTravelogueView = ({ id }: Props) => {
  const router = useRouter();
  const toast = useToast();

  const { data, loading, error } = useTripDetailQuery({
    variables: { tripId: id },
  });
  const [getAllActivitites, allActivititesQuery] = useAllActivitiesLazyQuery();
  const [updateTrip, updateTripStatus] = useUpdateTripMutation({
    refetchQueries: [namedOperations.Query.TripDetail],
    onCompleted: (data) => {
      if (data.updateTrip?.success) {
        toast({
          title: 'سفر شما با موفقیت به‌روز شد.',
          // description: 'برای ثبت نهایی و انتشار سفر، سفر خود را تکمیل کنید',
          status: 'success',
          duration: 8000,
          isClosable: true,
          position: 'top-right',
        });
        // router.push('/travelogues/new/detail');
      }
    },
  });

  const [publishTrip, publishTripStatus] = usePublisTripMutation({
    variables: { tripId: id },
    // refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'سفر با موفقیت منتشر شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'انتشار سفر با خطا مواجه شد',
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
        title: 'سفر با موفقیت از حالت انتشار خارج شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'عملیات لغو انتشار سفر با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [createTransfer, createTransferStatus] = useCreateSinglTransferMutation(
    {
      onCompleted: (data) => {
        toast({
          title: 'حمل و  نقل با موفقیت ساخته شد.',
          status: 'success',
          duration: 8000,
          isClosable: true,
          position: 'top-right',
        });
      },
    }
  );

  const [deleteTransfer, deleteTransferStatus] =
    useDeleteSingleTransferMutation({
      onCompleted: (data) => {
        if (data.deleteTransfer?.success == true) {
          toast({
            title: 'حمل و نثل با موفقیت حذف شد.',
            status: 'success',
            duration: 8000,
            isClosable: true,
            position: 'top-right',
          });
        }
      },
    });

  const [deleteTrip, deleteTripStatus] = useDeleteTripMutation({
    variables: { deleteTripTripId: id },
    refetchQueries: [namedOperations.Query.MeDetail],
    onCompleted: (data) => {
      toast({
        title: 'سفر با موفقیت حذف شد',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
      router.push('/me');
    },
    onError: () => {
      toast({
        title: 'حذف سفر با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [createResidence, createResidenceStatus] = useCreateResidenceMutation({
    onCompleted: (data) => {
      toast({
        title: 'اقامتگاه با موفقیت افزوده شد.',
        status: 'success',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
    onError: () => {
      toast({
        title: 'ساخت اقامتگاه با خطا مواجه شد.',
        description: 'دوباره امتحان کنید',
        status: 'error',
        duration: 8000,
        isClosable: true,
        position: 'top-right',
      });
    },
  });

  const [createExperience, createExperienceStatus] =
    useCreateExperinceMutationMutation({
      onCompleted: (data) => {
        toast({
          title: 'تجربه با موفقیت افزوده شد.',
          status: 'success',
          duration: 8000,
          isClosable: true,
          position: 'top-right',
        });
      },
      onError: () => {
        toast({
          title: 'ساخت تجربه با خطا مواجه شد.',
          description: 'دوباره امتحان کنید',
          status: 'error',
          duration: 8000,
          isClosable: true,
          position: 'top-right',
        });
      },
    });

  const [createExperienceImages, createExperienceImagesStatus] =
    useCreateExperienceImageMutation();

  const countriesQuery = useAllCountriesQuery();
  const [getProvincesOfCountry, provincesOfCountryQuery] =
    useAllProvincesOfCountryLazyQuery();

  const [getCitiesOfProvince, citiesOfProvinceQuery] =
    useAllCitiesOfProvinceLazyQuery();

  const [getAllResidenceType, allResidenceTypeQuery] =
    useGetAllResidenceTypesLazyQuery();

  const [searchUsername, searchUsernameQuery] = useSearchUsernameLazyQuery({
    variables: { first: 10 },
  });
  const [searchAccessory, searchAccessoryQuery] = useSearchAccessoryLazyQuery({
    variables: { first: 10 },
  });

  const [getTransferTypes, transferTypesQuery] = useAllTransferTypesLazyQuery();
  const categoriesQuery = useAllTripCategoriesQuery();

  if (loading) {
    return <ApiLoading enhanced={true} />;
  }
  if (error) {
    return <ApiError />;
  }

  return (
    <>
      <Head>
        <title>{`ویرایش سفرنامه | ${data?.trip?.title} `}</title>
      </Head>
      <EditTravelogueHeader
        data={data as TripDetailQuery}
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
          deleteTrip: () => deleteTrip(),
          publishTrip: () => publishTrip(),
          unPublishTrip: () => unPublishTrip(),
          updateTrip: (inputs: UpdateTripMutationVariables) =>
            updateTrip({ variables: { ...inputs } }),
          getProvincesOfCountry: (countryId: string) =>
            getProvincesOfCountry({
              variables: { allProvincesCountry: countryId },
            }),
        }}
        queries={{
          deleteTripStatus,
          unPublishTripStatus,
          publishTripStatus,
          countriesQuery,
          provincesOfCountryQuery,
          categoriesQuery,
          updateTripStatus,
        }}
      />
      <EditTravelogueContainer
        data={data as TripDetailQuery}
        actions={{
          deleteTrip: () => deleteTrip(),
          publishTrip: () => publishTrip(),
          unPublishTrip: () => unPublishTrip(),
          searchUsername: (username: string) =>
            searchUsername({ variables: { username: username } }),
          searchAccessory: (id: string, name: string) =>
            searchAccessory({ variables: { id: id, name: name } }),
          updateTrip: (inputs: UpdateTripMutationVariables) =>
            updateTrip({ variables: { ...inputs } }),
          getAllActivitites: () => getAllActivitites(),
          getAllResidenceType: () => getAllResidenceType(),
          getProvincesOfCountry: (countryId: string) =>
            getProvincesOfCountry({
              variables: { allProvincesCountry: countryId },
            }),
          getCitiesOfProvince: (provinceId: string) =>
            getCitiesOfProvince({
              variables: { province: provinceId },
            }),
          createTransfer: (inputs: CreateSinglTransferMutationVariables) =>
            createTransfer({ variables: { ...inputs } }),
          deleteTransfer: (id: string) =>
            deleteTransfer({ variables: { id: id } }),
          getTransferTypes: () => getTransferTypes(),
          createExperienceImages: (
            inputs: CreateExperienceImageMutationVariables
          ) => createExperienceImages({ variables: { ...inputs } }),
          createExperience: (
            inputs: CreateExperinceMutationMutationVariables
          ) => createExperience({ variables: { ...inputs } }),
          createResidence: (inputs: CreateResidenceMutationVariables) =>
            createResidence({ variables: { ...inputs } }),
        }}
        queries={{
          deleteTripStatus,
          unPublishTripStatus,
          publishTripStatus,
          countriesQuery,
          provincesOfCountryQuery,
          categoriesQuery,
          updateTripStatus,
          searchUsernameQuery,
          searchAccessoryQuery,
          allActivititesQuery,
          allResidenceTypeQuery,
          deleteTransferStatus,
          createTransferStatus,
          citiesOfProvinceQuery,
          transferTypesQuery,
          createExperienceStatus,
          createExperienceImagesStatus,
          createResidenceStatus,
        }}
      />
    </>
  );
};

export default EditTravelogueView;
