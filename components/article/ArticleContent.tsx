import { Flex, Stack, Wrap, Text, Center } from '@chakra-ui/react';
import React from 'react';
import { FaCampground } from 'react-icons/fa';
import { FiFeather, FiHome } from 'react-icons/fi';

export function ArticleContent(props: any) {
  return (
    <Stack>
      <Wrap align="center">
        <FiFeather />
        <Text fontWeight="extrabold">مقاله</Text>
      </Wrap>
      <div dangerouslySetInnerHTML={{ __html: props.content }} />
    </Stack>
  );
}
