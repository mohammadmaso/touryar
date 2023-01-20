import { Box, Grid, Heading, HStack, Stack } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
import Slider from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import TripSmallCard from '../cards/TripSmallCard';
import { AllTripQuery } from '../../graphql/generated/types';
import { CarousalNextArrow, CarousalPrevArrow } from './CarousalArrow';

interface Props {
  slideToShow?: number;
  data: AllTripQuery | undefined;
  actions: any;
  queries: any;
}

export default function TripCarousal(props: Props): ReactElement {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    nextArrow: <CarousalNextArrow />,
    prevArrow: <CarousalPrevArrow />,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1261,
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
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <Slider {...settings}>
      {props.data?.allTrip?.edges.map((item) => (
        <TripSmallCard
          key={item!.node!.id!}
          data={item?.node!}
          queries={props.queries}
          actions={props.actions}
        />
      ))}
    </Slider>
  );
}
