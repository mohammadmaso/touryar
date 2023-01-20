import { Center, Text, Button, Stack } from '@chakra-ui/react';
import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../public/animations/lf30_editor_r11ov8r7.json';

interface Props {}

const success = (props: Props) => {
  return (
    <div>
      <Center minHeight="100vh">
        <Stack
          spacing="3"
          height="fit-content"
          justifyContent="center"
          align="center"
        >
          <Lottie
            options={{
              animationData: animationData,
              autoplay: true,
              loop: false,
            }}
            height={200}
            width={200}
          />
          <Text fontWeight="extrabold">پرداخت با موفقیت انجام شد.</Text>
          <Text fontSize="lg">سفر خوشی را برای شما آرزومندیم :)</Text>
          <Button colorScheme="primary" rounded="full">
            بازگشت به داشبورد
          </Button>
        </Stack>
      </Center>
    </div>
  );
};

export default success;
