import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Image,
  Input,
  Spinner,
  Stack,
  Text,
  useToast,
} from '@chakra-ui/react';
import Link from 'next/link';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';

import Head from 'next/head';
import { useRouter } from 'next/router';
import CircleLogo from '../../components/logos/CircleLogo';
import {
  TokenAuthMutation,
  useTokenAuthMutation,
} from '../../graphql/generated/types';
import { useRandomPicture } from '../../hooks/useRandomePicture';

export default function SignIn() {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const toast = useToast();

  const setTokens = (
    data: TokenAuthMutation | null | undefined,
    callback: () => void
  ) => {
    if (data?.tokenAuth?.success) {
      localStorage.setItem('token', data.tokenAuth?.token as string);
      localStorage.setItem(
        'refresh-token',
        data.tokenAuth?.refreshToken as string
      );
      callback();
    }
  };

  const [signIn, { loading, error, data }] = useTokenAuthMutation({
    onCompleted: (data) => {
      setTokens(data, () => router.push('/travelogues'));
    },
  });

  function onSubmit(e: any) {
    e.preventDefault();
    signIn({
      variables: {
        tokenAuthPhoneNumber: phoneNumber,
        tokenAuthPassword: password,
      },
    });
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Head>
        <title>توریار | ورود</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex p={8} flex="1" align={'center'} justifyContent={'center'}>
        <Stack spacing={6} w={'full'} maxW={'md'}>
          {/* <TextLogo height="100" width="200" /> */}
          <CircleLogo />
          {/* <Heading fontWeight="medium" fontSize={'xl'}>
            ورود به حساب کاربری
          </Heading> */}
          {error ? <Text>{error.message}</Text> : null}

          <form onSubmit={onSubmit}>
            <Stack>
              <FormControl id="phone">
                <FormLabel>شماره موبایل</FormLabel>
                <Input
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  type="phone"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>رمزعبور</FormLabel>
                <Input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </FormControl>
            </Stack>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justifyContent={'space-between'}
                mt="2"
              >
                <Link href="/auth/register">ثبت نام</Link>
                <Link href="/auth/password-forgot">فراموشی رمز عبور</Link>
              </Stack>
              <Button
                colorScheme="primary"
                rounded="full"
                variant={'solid'}
                type="submit"
              >
                {loading ? <Spinner /> : 'ورود'}
              </Button>

              <Button
                w={'full'}
                maxW={'md'}
                rounded="full"
                variant={'outline'}
                leftIcon={<FcGoogle />}
                disabled
              >
                <Center>
                  <Text>ورود با گوگل</Text>
                </Center>
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>

      <Flex flex="1">
        <Image
          alt={'Login Image'}
          objectFit="contain"
          src={useRandomPicture()}
          fallbackSrc="/images/placeholder.png"
        />
      </Flex>
    </Stack>
  );
}
