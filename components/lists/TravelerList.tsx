import { SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import TravelerCard from '../cards/TravelerCard';
import CategoryCard from '../cards/CategoryCard';

interface Props {
  profiles?: any;
}

const TravelerList = (props: Props) => {
  return (
    <div>
      <SimpleGrid
        spacing="5"
        columns={{ base: 1, sm: 2, md: 3, lg: 5 }}
        justifyContent="center"
      >
        {props.profiles?.map((item: any) => (
          <>
            <TravelerCard key={item.node.id} {...item.node} />
          </>
        ))}
      </SimpleGrid>
    </div>
  );
};

export default TravelerList;
