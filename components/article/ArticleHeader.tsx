import { CalendarIcon, TimeIcon } from '@chakra-ui/icons';
import {
  Stack,
  Wrap,
  Text,
  Tag,
  Divider,
  useEventListener,
  Avatar,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';

export function ArticleHeader(props: any) {
  const [stickyHeader, setStickyHeader] = useState(false);

  // const handleScroll = () => {
  //   if (window.pageYOffset > 120) {
  //     if (!stickyHeader) {
  //       setStickyHeader(true);
  //     }
  //   } else {
  //     if (stickyHeader) {
  //       setStickyHeader(false);
  //     }
  //   }
  // };
  // useEventListener('scroll', handleScroll);

  return (
    <Stack
      // px={[4, 4, 120]}
      // position={stickyHeader ? 'fixed' : undefined}
      pt={'2'}
      pb={'2'}
      // boxShadow={stickyHeader ? 'md' : '0'}
      // bgColor={useColorModeValue('white', 'gray.700')}
      zIndex="90"
      // top={stickyHeader ? '60px' : undefined}
      w="full"
      transitionDuration="2"
    >
      <Text as="h1" fontSize="xl" fontWeight="semibold">
        {props.title}
      </Text>
      <Wrap fontWeight="light" fontSize="sm" align="center">
        <HStack align={'center'} justifyContent="space-between">
          <Avatar
            src={props.author.avatar}
            // alt={props.author.username}
            size="sm"
            ml="2"
          />
          <Text fontWeight={300} fontSize="sm" dir="ltr">
            {props.author.username}
          </Text>
        </HStack>
        <Tag colorScheme="primary">{props.category.title}</Tag>
        <Divider orientation="vertical" />
        <Wrap align="center">
          <TimeIcon ml="1" />
          <Text>{props.timeToRead} دقیقه</Text>
        </Wrap>
      </Wrap>
    </Stack>
  );
}
