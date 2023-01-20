import { Center, Stack, Wrap, Text, Image } from '@chakra-ui/react';
import React from 'react';
import { FaFire } from 'react-icons/fa';
import { FiActivity } from 'react-icons/fi';
import { IoCloudyNight } from 'react-icons/io5';

interface Props {}

function ActivityCard(props: any) {
  return (
    <Center p="3" rounded="sm" shadow="sm">
      <Stack align="center">
        <Image src={props.svg} alt={props.title} w="40px" />
        <Text fontSize="xs">{props.title}</Text>
      </Stack>
    </Center>
  );
}

const ArticleActivities = (props: any) => {
  return (
    <Stack>
      <Wrap align="center">
        <FiActivity />
        <Text fontWeight="extrabold"> فعالیت‌ها</Text>
      </Wrap>
      <Wrap>
        {props.data.map((item: any) => (
          <ActivityCard key={item.node.id} {...item.node} />
        ))}
      </Wrap>
    </Stack>
  );
};

export default ArticleActivities;
