import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  Wrap,
} from '@chakra-ui/react';
import Head from 'next/head';
import Link from 'next/link';
import CircleLogo from '../../../components/logos/CircleLogo';
import useIsSignedIn from '../../../hooks/useIsSignedIn';
import { useIsTourLeader } from '../../../hooks/useIsTourLeader';

export default function SimpleCard() {
  const isTourGuid = useIsTourLeader();
  const { isSignedIn } = useIsSignedIn();

  if (isTourGuid) {
    return (
      <Center minH={'100vh'}>
        <Head>
          <title>{`توریار |  ثبت‌نام تورلیدر `}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Stack spacing={8} mx={'auto'} maxW={'2xl'} p={2} py="4">
          <Text fontSize={'lg'} color={'gray.600'}>
            شما در حال حاضر تورلیدر توریار هستید، به داشبورد برگردید و تورهای
            خود را مدیریت کنید.
          </Text>
        </Stack>
      </Center>
    );
  }
  if (!isSignedIn) {
    return (
      <Center minH={'100vh'}>
        <Head>
          <title>{`توریار |  ثبت‌نام تورلیدر `}</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Stack spacing={8} mx={'auto'} maxW={'2xl'} p={2} py="4">
          <Text fontSize={'xl'} color={'gray.600'}>
            کاربر توریار نیستید؟
          </Text>
          <Text fontSize={'lg'} color={'gray.600'}>
            ابتدا ثبت نام کنید یا وارد شوید و سپس اقدام به ثبت‌نام تورلیدر
            بکنید.
          </Text>
          <Wrap>
            <Link href="/auth/register" passHref>
              <Button colorScheme="primary">ثبت‌ نام</Button>
            </Link>
            <Link href="/auth/login" passHref>
              <Button>ورود</Button>
            </Link>
          </Wrap>
        </Stack>
      </Center>
    );
  }
  return (
    <Center minH={'100vh'}>
      <Head>
        <title>{`توریار |  ثبت‌نام تورلیدر `}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack spacing={8} mx={'auto'} maxW={'2xl'} p={2} py="4">
        <Stack align={'center'}>
          <CircleLogo />
          <Heading fontSize={'2xl'}>
            ثبت نام در اولین جامعه تورلیدر‌های ایران
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            تور خودت رو حرفه‌ای بساز
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          // bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          minW="auto"
          fontSize="sm"
          p={3}
          h="auto"
        >
          <Stack spacing={4} fontSize="sm">
            <FormControl id="">
              <FormLabel fontSize="sm">نام و نام‌خانوادگی</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="">
              <FormLabel fontSize="sm">کد ملی</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="">
              <FormLabel fontSize="sm">شماره موبایل</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="">
              <FormLabel fontSize="sm">کد گردشگری میراث فرهنگی</FormLabel>
              <Input type="email" />
            </FormControl>

            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justifyContent={'space-between'}
                fontSize="sm"
              >
                <Checkbox colorScheme="primary" fontSize="sm">
                  پذیرش قوانین توریار
                </Checkbox>
                <Link href="#">قوانین و مقررات</Link>
              </Stack>
              <Button colorScheme="primary">ثبت نام</Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Center>
  );
}
