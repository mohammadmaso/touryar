import React from 'react';
import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  useColorModeValue,
  Image,
  Tag,
  HStack,
  Flex,
  Wrap,
  Img,
  WrapItem,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import {
  ArticleCategoryType,
  ArticleCategoryTypeConnection,
  ArticleCategoryTypeEdge,
} from '../../graphql/generated/types';
import Link from 'next/link';

interface Props {
  categories: any;
}

export const WikiCategoryList = (props: Props) => {
  return (
    <>
      <Wrap spacing="4">
        {props.categories.map((item: any) => (
          <>
            <WikiCategoryBox
              key={item.node.id}
              id={item.node.id}
              name={item.node.title}
              svg={item.node.svg}
            />
          </>
        ))}
      </Wrap>
    </>
  );
};

const WikiCategoryBox = (props: any) => {
  return (
    <div>
      <Link
        href={{
          pathname: '/articles/list',
          query: { categoryId: props.id },
        }}
        passHref
      >
        <Center my="4" cursor="pointer">
          <Box
            bg={useColorModeValue('green.100', 'green.900')}
            boxShadow={'sm'}
            rounded={'md'}
            overflow={'hidden'}
            w={'full'}
            position="relative"
            transition={'all .3s ease'}
            _hover={{ transform: 'scale(1.1,1.1)' }}
          >
            <HStack p="3" justifyContent={'center'} align={'center'}>
              <Img
                w={props.size ? `${props.size}rem` : '1.3rem'}
                h={props.size ? `${props.size}rem` : '1.3rem'}
                src={props.svg}
                objectFit="scale-down"
                alt={props.name}
                opacity="25%"
                filter={useColorModeValue(
                  'invert(25%) sepia(68%) saturate(0%) hue-rotate(296deg) brightness(96%) contrast(102%)',
                  'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
                )}
              />
              <Text
                width="full"
                fontWeight={500}
                color={useColorModeValue('green.600', 'green.100')}
              >
                {props.name}
              </Text>
            </HStack>
          </Box>
        </Center>
      </Link>
    </div>
  );
};
