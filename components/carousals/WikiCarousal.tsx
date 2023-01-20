import { Box, Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import React, { ReactElement } from 'react';
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
  data: AllArticleQuery | undefined;
}

export default function WikiCarusal(props: Props): ReactElement {
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
    <Box>
      <Slider {...settings}>
        {props.data?.allArticle?.edges.map((item) => (
          <WikiCard key={item!.node!.id!} {...item?.node!} />
        ))}
      </Slider>
    </Box>
  );
}
