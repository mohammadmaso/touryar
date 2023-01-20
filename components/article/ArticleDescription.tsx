import { Flex, Stack, Wrap, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { FaCampground } from 'react-icons/fa';
import { FiFeather, FiHome } from 'react-icons/fi';

export function ArticleDescription(props: any) {
  return (
    <Stack>
      <Wrap align="center">
        <FiFeather />
        <Text fontWeight="extrabold">مختصر و مفید</Text>
      </Wrap>
      <Wrap>
        <Text fontSize="sm" lineHeight="7">
          {props.shortDescription}
        </Text>
      </Wrap>
    </Stack>
  );
}
