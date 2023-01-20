import { Center, Stack, Wrap, Text } from '@chakra-ui/react';
import React from 'react';
import { FaFire } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import { IoCloudyNight } from 'react-icons/io5';

interface Props {}

function ActivityCard() {
  return (
    <Center p="3" rounded="sm" shadow="sm">
      <Stack align="center">
        <FaFire />
        <Text fontSize="xs">آتش نشینی</Text>
      </Stack>
    </Center>
  );
}

const PlaceActivities = (props: Props) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiActivity />
        <Text>فعالیت‌ها</Text>
      </Wrap>
      <Wrap>
        <ActivityCard />
      </Wrap>
    </Stack>
  );
};

export default PlaceActivities;
