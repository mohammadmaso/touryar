import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useState } from 'react';
import BeatLoader from 'react-spinners/BeatLoader';

import Head from 'next/head';
import { useRouter } from 'next/router';
import CircleLogo from '../../components/logos/CircleLogo';
import {
  useResendVerificationSmsMutation,
  useVerifySmsMutation,
} from '../../graphql/generated/types';
import { useRandomPicture } from '../../hooks/useRandomePicture';

export default function SignIn() {
  const [code, setCode] = useState('');
  const toast = useToast();

  const [result, setResult] = useState('');
  const router = useRouter();
  const [displayResend, setDisplayResend] = useState(true);
  const [count, setCount] = useState(0);
  useVerifySmsMutation;
  const [
    verify,
    {
      loading: verificationLoading,
      error: verificationError,
      data: verificationData,
    },
  ] = useVerifySmsMutation({
    onCompleted: (data) => {
      if (data) {
        if (data && data.verifySms?.success) {
          router.push({
            pathname: '/auth/login',
          });
          toast({
            title: 'سفر خوش',
            description: 'حساب کاربری شما با موفقیت ساخته شد',
            status: 'success',
            duration: 8000,
            isClosable: true,
            position: 'top-right',
          });
        }
      }
    },
  });

  const [
    resend,
    { loading: resendLoading, error: resendError, data: resendData },
  ] = useResendVerificationSmsMutation({
    onCompleted: (data) => {
      if (data) {
        if (data && data.resendVerificationSms?.success) {
          setResult('کد با موفقیت ارسال شد');
        }
      }
    },
  });

  function onSubmit(e: any) {
    e.preventDefault();
    verify({
      variables: {
        verifySmsCode: code,
        verifySmsPhoneNumber: router.query.phone as string,
      },
    });
  }

  function handleResendButton() {
    setDisplayResend(false);
    setCount(60);
    var counter = setInterval(timer, 1000);
    function timer() {
      setCount((prevCount) => prevCount - 1);
      if (count <= 0) {
        clearInterval(counter);
        setDisplayResend(true);
        return;
      }
    }
  }

  function handleResendCode(e: any) {
    // handleResendButton();
    setResult('');
    e.preventDefault();
    resend({
      variables: {
        resendVerificationSmsPhoneNumber: router.query.phone as string,
      },
    });
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Head>
        <title> توریار | فعالسازی</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justifyContent={'center'}
        zIndex={100}
      >
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <CircleLogo />
          {/* <TextLogo height="100" width="200" /> */}
          <Heading fontWeight="medium" fontSize={'xl'}>
            فعالسازی‌ حساب ‌کاربری
          </Heading>
          {verificationError && (
            <Text color="red">{verificationError.message}</Text>
          )}

          <form onSubmit={onSubmit}>
            <FormControl id="code">
              <FormLabel>کد ارسال شده</FormLabel>
              <Input onChange={(e) => setCode(e.target.value)} />
            </FormControl>

            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justifyContent={'space-between'}
                mt={2}
              >
                <Button
                  spinner={<BeatLoader size={8} color="#215970" />}
                  colorScheme="primary"
                  isLoading={resendLoading}
                  onClick={handleResendCode}
                  variant="link"
                  fontSize="medium"
                >
                  ارسال دوباره کد
                </Button>

                <Text>{result}</Text>
              </Stack>
              <Button
                colorScheme="primary"
                rounded="full"
                variant={'solid'}
                type="submit"
                isLoading={verificationLoading}
              >
                فعالسازی‌ حساب
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
      <Flex flex="1">
        <Image
          alt={'Login Image'}
          objectFit={'contain'}
          src={useRandomPicture()}
          fallbackSrc="/images/placeholder.png"
        />
      </Flex>
    </Stack>
  );
}
