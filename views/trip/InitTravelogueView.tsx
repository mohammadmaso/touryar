import { useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import InitTravelogue from '../../components/travelogue/addTravelogue/InitTravelogue';
import {
  CreateInitialTripMutationVariables,
  useAllCountriesQuery,
  useAllProvincesOfCountryLazyQuery,
  useAllTripCategoriesQuery,
  useCreateInitialTripMutation,
} from '../../graphql/generated/types';

interface Props {}

const InitTravelogueView = (props: Props) => {
  const toast = useToast();

  const router = useRouter();

  const [createInitialTrip, createInitialTripStatus] =
    useCreateInitialTripMutation({
      onCompleted: (data) => {
        if (data.createTrip?.success) {
          toast({
            title: 'تور شما با موفقیت اضافه شد.',
            description: 'برای ثبت نهایی و انتشار سفر، سفر خود را تکمیل کنید',
            status: 'success',
            duration: 8000,
            isClosable: true,
            position: 'top-right',
          });
          router.push(`/travelogues/edit/${data.createTrip.trip?.id}`);
        }
      },
    });

  const countriesQuery = useAllCountriesQuery();
  const [getProvincesOfCountry, provincesOfCountryQuery] =
    useAllProvincesOfCountryLazyQuery();

  const categoriesQuery = useAllTripCategoriesQuery();

  return (
    <div>
      <InitTravelogue
        actions={{
          createInitialTrip: (inputs: CreateInitialTripMutationVariables) =>
            createInitialTrip({
              variables: { ...inputs },
            }),
          // getContries: () => getContries(),
          getProvincesOfCountry: (countryId: string) =>
            getProvincesOfCountry({
              variables: { allProvincesCountry: countryId },
            }),
        }}
        status={{
          createInitialTripStatus,
        }}
        queries={{ countriesQuery, provincesOfCountryQuery, categoriesQuery }}
      />
    </div>
  );
};

export default InitTravelogueView;
