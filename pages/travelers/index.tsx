import React from 'react';
import TravelerList from '../../components/lists/TravelerList';

import BaseLayout from '../../layouts/BaseLayout';
import TravelersView from '../../views/travelers/TravelersView';

export default function Home() {
  return (
    <BaseLayout>
      <div>
        <TravelersView />
      </div>
    </BaseLayout>
  );
}
