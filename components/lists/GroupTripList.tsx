import { SimpleGrid, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react';
import GroupTripSmallCard from '../cards/GroupTripSmallCard';
import TravelerCard from '../cards/TravelerCard';
import TripSmallCard from '../cards/TripSmallCard';

interface Props {}

const GroupTripList = (props: Props) => {
  return (
    <SimpleGrid
      spacing="2"
      columns={{ base: 1, sm: 1, md: 4 }}
      justifyContent="center"
    >
      <GroupTripSmallCard
        categories={['ماجراجویی', 'خانوادگی']}
        name="سفر دو روزه به کیش"
        likes={347}
        from-city="تهران"
        to-city="کیش"
        days={4}
        username="MohammadMaso"
        avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
        image={'https://source.unsplash.com/800x600/?nature'}
      />

      <GroupTripSmallCard
        categories={['ماجراجویی', 'خانوادگی']}
        name="سفر دو روزه به کیش"
        likes={347}
        from-city="تهران"
        to-city="کیش"
        days={4}
        username="MohammadMaso"
        avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
        image={'https://source.unsplash.com/800x600/?nature'}
      />

      <GroupTripSmallCard
        categories={['ماجراجویی', 'خانوادگی']}
        name="سفر دو روزه به کیش"
        likes={347}
        from-city="تهران"
        to-city="کیش"
        days={4}
        username="MohammadMaso"
        avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
        image={'https://source.unsplash.com/800x600/?nature'}
      />

      <GroupTripSmallCard
        categories={['ماجراجویی', 'خانوادگی']}
        name="سفر دو روزه به کیش"
        likes={347}
        from-city="تهران"
        to-city="کیش"
        days={4}
        username="MohammadMaso"
        avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
        image={'https://source.unsplash.com/800x600/?nature'}
      />

      <GroupTripSmallCard
        categories={['ماجراجویی', 'خانوادگی']}
        name="سفر دو روزه به کیش"
        likes={347}
        from-city="تهران"
        to-city="کیش"
        days={4}
        username="MohammadMaso"
        avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
        image={'https://source.unsplash.com/800x600/?nature'}
      />

      <GroupTripSmallCard
        categories={['ماجراجویی', 'خانوادگی']}
        name="سفر دو روزه به کیش"
        likes={347}
        from-city="تهران"
        to-city="کیش"
        days={4}
        username="MohammadMaso"
        avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
        image={'https://source.unsplash.com/800x600/?nature'}
      />

      <GroupTripSmallCard
        categories={['ماجراجویی', 'خانوادگی']}
        name="سفر دو روزه به کیش"
        likes={347}
        from-city="تهران"
        to-city="کیش"
        days={4}
        username="MohammadMaso"
        avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
        image={'https://source.unsplash.com/800x600/?nature'}
      />
    </SimpleGrid>
  );
};

export default GroupTripList;
