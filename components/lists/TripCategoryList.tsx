import { SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import CategoryCard from '../cards/CategoryCard';
import TravelerCard from '../cards/TravelerCard';

interface Props {
  categories?: any;
}

const TripCategoryList = (props: Props) => {
  return (
    <div>
      <SimpleGrid
        spacing="5"
        columns={{ base: 1, sm: 2, md: 4 }}
        justifyContent="center"
      >
        {props.categories.map((item: any) => (
          <>
            <CategoryCard
              key={item.node.id}
              id={item.node.id}
              title={item.node.title}
              image={item.node.image}
            />
          </>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default TripCategoryList;
