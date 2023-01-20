import React from 'react';
import CategoryCarousal from '../../components/carousals/CategoryCarousal';
import GroupTripCarousal from '../../components/carousals/GroupTripCarousal';
import CallToActionCreateGroupTrip from '../../components/landing/CallToActionCreateGroupTrip';
import BaseLayout from '../../layouts/BaseLayout';
import TripCategoriesView from '../../views/trip/TripCategoriesView';

export default function Home() {
  return (
    <BaseLayout title="همسفر">
      <CallToActionCreateGroupTrip />
      <TripCategoriesView />
      <GroupTripCarousal />
    </BaseLayout>
  );
}
