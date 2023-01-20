import { Center, Stack, Wrap, Text, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import { FaFire } from 'react-icons/fa';
import { FiActivity, FiAward } from 'react-icons/fi';
import { IoCloudyNight } from 'react-icons/io5';

interface Props {}

function FacilityCard() {
  return (
    <Center
      px="3"
      py="1"
      rounded="full"
      bgColor={useColorModeValue('gray.50', 'gray.700')}
    >
      <Text fontSize="xs">لژ خانوادگی</Text>
    </Center>
  );
}

const PlaceFacilities = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiAward />
        <Text>اماکانت رفاهی</Text>
      </Wrap>
      <Wrap>
        <FacilityCard />
      </Wrap>
    </Stack>
  );
};

export default PlaceFacilities;
