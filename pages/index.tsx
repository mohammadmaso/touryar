import { Stack } from '@chakra-ui/react';
import dynamic from 'next/dynamic';
import CallToActionWithVideo from '../components/landing/CallToActionWithVideo';
import LandingGallery from '../components/landing/Slider';
import TourLeaderCTA from '../components/landing/TourLeaderCTA';
import TriAngleNatureBanner from '../components/landing/triAngleNature';

import BaseLayout from '../layouts/BaseLayout';
import LastArticlesView from '../views/article/LastArticlesView';
import LastTripsView from '../views/trip/LastTripsView';
import TripCategoriesView from '../views/trip/TripCategoriesView';
const ReactGlobe = dynamic(() => import('../components/globe'), {
  ssr: false,
});

export default function Home() {
  return (
    <BaseLayout>
      <Stack spacing="10">
        <CallToActionWithVideo />

        {/* <ToureCard1 /> */}
        <TourLeaderCTA />
        {/* <ReactGlobe /> */}
        {/* <MapCTA /> */}
        {/* <TourCategoriesView /> */}
        <TripCategoriesView />
        <LandingGallery />

        <LastTripsView />

        {/* <CallToActionCreateGroupTrip /> */}
        <LastArticlesView />
        <TriAngleNatureBanner />
      </Stack>
    </BaseLayout>
  );
}
