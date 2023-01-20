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
  Flex,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { BiHappyHeartEyes, BiMeh, BiSad, BiSmile } from 'react-icons/bi';
import { FiBookmark, FiHeart, FiMeh, FiSmile } from 'react-icons/fi';
import {
  HiLocationMarker,
  HiOutlineEmojiHappy,
  HiOutlineEmojiSad,
} from 'react-icons/hi';

export function PlaceHeader() {
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
    <Flex
      justifyContent="space-between"
      position={stickyHeader ? 'fixed' : undefined}
      pt={stickyHeader ? '4' : '2'}
      pb={stickyHeader ? '2' : '2'}
      boxShadow={stickyHeader ? 'md' : '0'}
      bgColor={stickyHeader ? 'white' : 'transparent'}
      zIndex="90"
      top={stickyHeader ? '60px' : undefined}
      w="full"
      transitionDuration="2"
      px={[4, 4, 120, 120, 300]}
      align="center"
    >
      <Stack>
        <Text as="h1" fontSize="xl" fontWeight="semibold">
          تخت‌جمشید
        </Text>
        <Wrap fontWeight="light" fontSize="sm">
          <Tag colorScheme="primary">خانوادگی</Tag>
          <Tag colorScheme="primary">تاریخی</Tag>
          <Divider orientation="vertical" />
          <Wrap align="center">
            <HiLocationMarker />
            <Text>شیراز - ایران</Text>
          </Wrap>
        </Wrap>
      </Stack>
      <Wrap>
        <Stack spacing="1" justifyContent="end" color="gray.400">
          <Wrap spacing="0.5">
            <BiHappyHeartEyes size="20" />
            <BiSmile size="20" />
            <BiMeh size="20" />
            <BiSad size="20" />
          </Wrap>
          <Wrap fontSize="xs" spacing="1">
            <Text>حال و هوا</Text>
            <Text>(۳۵۰)</Text>
          </Wrap>
        </Stack>
        <Divider orientation="vertical" />
        <FiBookmark size="20" />
      </Wrap>
    </Flex>
  );
}
