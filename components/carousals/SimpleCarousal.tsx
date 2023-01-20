import { Box, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import React, { ReactElement, ReactNode } from 'react';
import Slider from 'react-slick';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import WikiCard from '../cards/WikiCard';
import {
  AllArticleQuery,
  ArticleType,
  ArticleTypeConnection,
} from '../../graphql/generated/types';
import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';

interface Props {
  title: string;
  children: ReactNode;
}

export default function SimpleCarousal(props: Props): ReactElement {
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
          slidesToShow: 3,
          slidesToScroll: 3,
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
      <Heading size="lg" fontWeight="500" ml={3}>
        {props.title}
      </Heading>
      <Slider {...settings}>{props.children}</Slider>
    </Box>
  );
}
