import { Box, Button, Grid, Heading, HStack, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import TripSmallCard from '../cards/TripSmallCard';
import GroupTripSmallCard from '../cards/GroupTripSmallCard';

interface Props {
  slideToShow?: number;
}

export default function GroupTripCarousal(props: Props): ReactElement {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 2,
          dots: true,
        },
      },
    ],
  };
  return (
    <Box py={10}>
      <HStack>
        <Heading size="lg" fontWeight="500" ml={3}>
          آخرین سفر‌های گروهی‌
        </Heading>
        <Button size="sm">جستجو و فیلتر سفر‌ها</Button>
      </HStack>
      <Slider {...settings}>
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
          categories={['ماجراجویی', 'طبیعت']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={4}
          username="Sarazaman"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <GroupTripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={'۴'}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <GroupTripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={'۴'}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <GroupTripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={'۴'}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
        <GroupTripSmallCard
          categories={['ماجراجویی', 'خانوادگی']}
          name="سفر دو روزه به کیش"
          likes={347}
          city="تهران"
          days={'۴'}
          username="MohammadMaso"
          avatar="https://avatars0.githubusercontent.com/u/1164541?v=4"
          image={'https://source.unsplash.com/800x600/?nature'}
        />
      </Slider>
    </Box>
  );
}
