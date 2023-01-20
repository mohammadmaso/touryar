import React, { ReactElement } from 'react';

import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Flex,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  AvatarGroup,
  Button,
} from '@chakra-ui/react';
import { FiArrowLeft, FiHeart, FiMapPin } from 'react-icons/fi';
import { ArrowLeftIcon, TimeIcon } from '@chakra-ui/icons';
import { BiArrowFromRight } from 'react-icons/bi';

export default function GroupTripSmallCard(props: any) {
  return (
    <Center py={6} m={2}>
      <Box
        bgColor={useColorModeValue('white', 'gray.800')}
        boxShadow={'md'}
        rounded={'md'}
        w={'full'}
        transition={'all .3s ease'}
        _hover={{ transform: 'scale(1.1,1.1)' }}
      >
        <Flex
          width="full"
          align="flex-start"
          justifyContent="space-between"
          p={3}
          py={4}
        >
          <Flex justifyContent="flex-end">
            <Avatar
              showBorder
              size="md"
              ml="1"
              src={'https://avatars0.githubusercontent.com/u/1164541?v=4'}
              // alt={'Author'}
            />
            <Stack direction={'column'} spacing={0} fontSize={'sm'}>
              <Text mr="1" textAlign="right" fontWeight={400}>
                {props.username}
              </Text>
              <Wrap spacing="1">
                {props.categories.map((item: any) => (
                  <Tag
                    size="sm"
                    key={item}
                    colorScheme="primary"
                    variant="solid"
                  >
                    {item}
                  </Tag>
                ))}
              </Wrap>
            </Stack>
          </Flex>
          <Box>
            <Flex direction="column" justifyContent="center">
              <Text fontWeight="bold">۱۲</Text>
              <Text fontSize="sm">خرداد</Text>
            </Flex>
          </Box>
        </Flex>

        <Stack
          width="full"
          align="flex-start"
          justifyContent="flex-end"
          p="3"
          direction="column"
        >
          <Text fontWeight={500}>{props.name}</Text>
          <Wrap fontSize="sm" fontWeight="light" align="center" spacing="3">
            <Wrap align="center" spacing="1">
              <Text>روز</Text>
              <Text>{props.days}</Text>
              <TimeIcon h="3.5" w="3.5" />
            </Wrap>
            <Wrap align="center" spacing="1">
              <Text>کیش</Text>
              <FiArrowLeft />
              <Text>تهران</Text>
              <FiMapPin />
            </Wrap>
          </Wrap>
          <AvatarGroup size="sm" max={4} mt="2">
            <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Avatar
              name="Prosper Otemuyiwa"
              src="https://bit.ly/prosper-baba"
            />
            <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
          </AvatarGroup>
        </Stack>
        <Button
          m="3"
          rounded="full"
          size="sm"
          fontWeight="300"
          variant="ghost"
          colorScheme="primary"
          width="90%"
        >
          جزییات بیشتر و درخواست
        </Button>
      </Box>
    </Center>
  );
}
