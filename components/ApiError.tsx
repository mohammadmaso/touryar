import { Center, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { BiError } from 'react-icons/bi';
import { MdReplay } from 'react-icons/md';

interface Props {}

const ApiError = (props: Props) => {
  return (
    <div>
      <Center flexDir="column" my="2" p="3" w="full" shadow="md" rounded="lg">
        <Icon as={BiError} color="red.400" w="20px" h="20px" my="2" />
        <Text fontWeight="light">خطا در دریافت اطلاعات</Text>
        <Text fontWeight="light" fontSize="sm">
          در صدد رفع مشکل هستیم و به زودی آن را برطرف می‌کنیم.
        </Text>
        {/* <Icon as={MdReplay} my="2" /> */}
      </Center>
    </div>
  );
};

export default ApiError;
