import {
  Box,
  Grid,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react';
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
  category: string;
}

export default function WikiList(props: Props): ReactElement {
  return (
    <Box py={10}>
      <Heading size="lg" fontWeight="500" ml={3}>
        مقالات با موضوع {props.category}
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }}>
        {props.data?.allArticle?.edges.map((item) => (
          <WikiCard key={item!.node!.id!} {...item?.node!} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
