import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Text,
  Wrap,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

interface Props {}

const UserSimpleListCard = (props: any) => {
  return (
    <div>
      <Link href={`/profile/${props.username}`} passHref>
        <>
          <Box rounded="md" p="2" cursor="pointer">
            <Flex justifyContent="space-between">
              <Wrap align="center">
                <Avatar src={props.avatar} />
                <Text>{props.username}</Text>
              </Wrap>
            </Flex>
          </Box>
          <Divider />
        </>
      </Link>
    </div>
  );
};

export default UserSimpleListCard;
