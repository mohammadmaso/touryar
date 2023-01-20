import { Box, Stack, Wrap, Text, Image, Flex, Button } from '@chakra-ui/react';
import React from 'react';
import { FiBookmark, FiShoppingBag } from 'react-icons/fi';
import AccessoryCard from '../cards/AccessoryCard';

interface Props {}

const ArticleAccessories = (props: any) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiShoppingBag />
        <Text fontWeight="extrabold">تجهیزات</Text>
      </Wrap>
      <Wrap spacing="5" justifyContent={{ base: 'center', md: 'right' }}>
        {props.data?.map((item: any) => (
          <AccessoryCard key={item.node.id} {...item.node} />
        ))}
      </Wrap>
    </Stack>
  );
};

export default ArticleAccessories;
