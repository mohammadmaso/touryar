import {
  Flex,
  Stack,
  Wrap,
  Text,
  Center,
  useColorModeValue,
  SimpleGrid,
} from '@chakra-ui/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import React from 'react';
import { BiSquareRounded } from 'react-icons/bi';
import { FaCampground } from 'react-icons/fa';
import { FiBell, FiHome } from 'react-icons/fi';
import { MdPlace } from 'react-icons/md';
import { PlaceType } from '../../graphql/generated/types';

interface Props {
  places:
    | Maybe<
        {
          __typename?: 'PlaceTypeEdge' | undefined;
        } & {
          node?:
            | Maybe<
                {
                  __typename?: 'PlaceType' | undefined;
                } & Pick<PlaceType, 'id' | 'name' | 'longitude' | 'latitude'>
              >
            | undefined;
        }
      >[]
    | undefined;
}

function PlaceCard(props: any) {
  return (
    <Flex
      justifyContent="space-between"
      borderRadius="full"
      bgColor={useColorModeValue('gray.100', 'gray.700')}
      fontSize="xs"
      h="2.2rem"
      align="center"
    >
      <Center h="2rem" w="2rem" borderRadius="full" bgColor="blue.400">
        <FiBell size="15" color="white" />
      </Center>
      <Text pl="4" pr="2" py="1">
        {props.name}
      </Text>
    </Flex>
  );
}

// function CityList() {
//   return (
//     <Stack>
//       <Flex
//         justifyContent="space-between"
//         borderRadius="full"
//         bgColor={useColorModeValue('gray.100', 'gray.700')}
//         fontSize="xs"
//         h="1.7rem"
//         align="center"
//       >
//         <Text fontWeight="bold" pl="4" pr="2" py="1">
//           شیراز
//         </Text>
//       </Flex>
//       <PlaceCard />
//       <PlaceCard />
//       <PlaceCard />
//     </Stack>
//   );
// }

export function TraveloguePlaces(props: Props) {
  return (
    <Stack>
      <Wrap align="center">
        <MdPlace />
        <Text fontWeight="extrabold">جاذبه‌ها</Text>
      </Wrap>
      <SimpleGrid columns={{ base: 2, sm: 3, md: 4 }} spacing={2}>
        {props.places?.map((item) => (
          <PlaceCard key={item?.node?.id} {...item?.node} />
        ))}
      </SimpleGrid>
    </Stack>
  );
}
