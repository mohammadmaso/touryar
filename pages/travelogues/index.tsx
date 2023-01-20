import BaseLayout from '../../layouts/BaseLayout';
import LastTripsView from '../../views/trip/LastTripsView';
import TripCategoriesView from '../../views/trip/TripCategoriesView';

export default function Home() {
  return (
    <BaseLayout title="تورها">
      {/* <ActivitiesView /> */}
      {/* <WriteTravelogueCTA /> */}
      <TripCategoriesView />
      <LastTripsView />
    </BaseLayout>
  );
}
