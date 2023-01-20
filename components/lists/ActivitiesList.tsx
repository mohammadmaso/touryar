import { SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import { ActivityCard } from '../cards/ActivityCard';
import CategoryCard from '../cards/CategoryCard';
import TravelerCard from '../cards/TravelerCard';

interface Props {
  activities?: any;
}

const ActivitiesList = (props: Props) => {
  return (
    <div>
      <SimpleGrid
        spacing="5"
        columns={{ base: 3, sm: 5, md: 10 }}
        justifyContent="center"
      >
        {props.activities.map((item: any) => (
          <>
            <ActivityCard
              key={item.node.id}
              id={item.node.id}
              title={item.node.titleFa}
              svg={item.node.svg}
            />
          </>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default ActivitiesList;
