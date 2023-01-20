import {
  Flex,
  Stack,
  Wrap,
  Text,
  Center,
  useColorModeValue,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import React from 'react';
import { FaCampground } from 'react-icons/fa';
import { FiHome } from 'react-icons/fi';
import { Maybe } from 'graphql/jsutils/Maybe';
import { ResidenceType } from '../../graphql/generated/types';

type Props = {
  residences: any[];
};

export function TravelogueAccomodations({ residences }: Props) {
  return (
    <Stack>
      <Wrap align="center">
        <FiHome />
        <Text fontWeight="extrabold">اقامتگاه‌ها</Text>
      </Wrap>

      <Wrap>
        {residences?.map((item) => (
          <Flex
            key={item?.node.id}
            justifyContent="flex-start"
            borderRadius="full"
            w="fit-content"
            pl="5"
            // bgColor={useColorModeValue('gray.100', 'gray.700')}
            fontSize="xs"
            h="2.7rem"
            align="center"
          >
            <Center
              h="2.6rem"
              w="2.6rem"
              borderRadius="full"
              bgColor="green.400"
            >
              <Image
                filter={
                  'invert(99%) sepia(99%) saturate(2%) hue-rotate(123deg) brightness(108%) contrast(100%)'
                }
                src={item?.node.residenceType?.svg}
                alt=""
                p="3"
              />
            </Center>
            <Stack spacing={0} pl="2" pr="2" py="2">
              <Text fontWeight="bold">{item?.node.name}</Text>
              <Text fontSize="xs">{item?.node.stayDuration} روز</Text>
            </Stack>
          </Flex>
        ))}
      </Wrap>
    </Stack>
  );
}
