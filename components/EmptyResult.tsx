import { Center, Icon, Text, Wrap } from '@chakra-ui/react';
import React from 'react';
import { FiFrown } from 'react-icons/fi';
import { ImFilesEmpty } from 'react-icons/im';

interface Props {
  title: string;
}

const EmptyResult = (props: Props) => {
  return (
    <Center>
      <Wrap align="center">
        <Icon as={FiFrown} />
        <Text>{`${props.title} یافت نشد!`}</Text>
      </Wrap>
    </Center>
  );
};

export default EmptyResult;
