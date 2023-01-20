import { useRouter } from 'next/router';
import BaseLayout from '../../../layouts/BaseLayout';
import EditTravelogueView from '../../../views/trip/EditTravelogueView';

export default function Home() {
  const router = useRouter();

  return (
    <BaseLayout title="ویرایش تور">
      <EditTravelogueView id={router.query.id! as string} />
    </BaseLayout>
  );
}
