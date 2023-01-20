import BaseLayout from '../../layouts/BaseLayout';
import TravelogueListView from '../../views/trip/TravelogueListView';

export default function Home() {
  return (
    <BaseLayout title="تورها">
      <TravelogueListView />
    </BaseLayout>
  );
}
