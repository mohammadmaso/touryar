import { Button, Center, Link, Stack, Text } from '@chakra-ui/react';
import { BiSupport } from 'react-icons/bi';
import Lottie from 'react-lottie';
import * as animationData from '../../public/animations/lf20_imrP4H.json';

interface Props {}

const fail = (props: Props) => {
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
            height={300}
            width={300}
          />
          <Text fontWeight="extrabold">
            متأسفانه پرداخت شما با خطا مواجه شد.
          </Text>
          <Text fontSize="lg">
            برای پیگیری بیشتر با پشتیبانی در تماس باشید.
          </Text>
          <Link as={'button'} href="tel:+989380374660" rounded="full">
            <>
              <BiSupport />
              09380374660
            </>
          </Link>
          <Button colorScheme="red" rounded="full">
            بازگشت به داشبورد
          </Button>
        </Stack>
      </Center>
    </div>
  );
};

export default fail;
