import {
  Box,
  Stack,
  Wrap,
  Text,
  Image,
  Flex,
  Button,
  SimpleGrid,
} from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { FiBookmark, FiShoppingBag } from 'react-icons/fi';
import { AccessoryType } from '../../graphql/generated/types';
import AccessoryCard from '../cards/AccessoryCard';

interface Props {
  accessories: any;
}

const TravelogueAccessories = (props: Props) => {
  return (
    <Stack pb="5">
      <Wrap align="center">
        <FiShoppingBag />
        <Text fontWeight="extrabold">تجهیزات</Text>
      </Wrap>
      <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing="5">
        {props.accessories.map((item: any) => (
          <AccessoryCard key={item?.node?.id} {...item.node} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default TravelogueAccessories;
