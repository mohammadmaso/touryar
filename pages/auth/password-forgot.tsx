import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Link,
  Stack,
  useDisclosure,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Head from 'next/head';
import CircleLogo from '../../components/logos/CircleLogo';
import TermOfUseModal from '../../components/Modals/TermOfUseModal';
import { useForgotPasswordSmsMutation } from '../../graphql/generated/types';
import { useRandomPicture } from '../../hooks/useRandomePicture';

export default function SingUp() {
  const router = useRouter();

  const [phone, setPhone] = useState('');

  const modal = useDisclosure();

  const [forgorPassword, { loading, data }] = useForgotPasswordSmsMutation({
    onCompleted: (data) => {
      if (data && data.forgotPasswordSms?.success) {
        router.push({
          pathname: '/auth/password-reset',
          query: { phone: phone },
        });
      }
    },
  });

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Head>
          <title> توریار | فراموشی رمزعبور</title>
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
            {/* <TextLogo height="100" width="200" /> */}
            <CircleLogo />
            <Heading fontWeight="medium" fontSize={'xl'}>
              فراموشی رمزعبور
            </Heading>

            <Formik
              initialValues={{
                phoneNumber: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                forgorPassword({
                  variables: {
                    forgotPasswordSmsPhoneNumber: values.phoneNumber,
                  },
                });
                setPhone(values.phoneNumber);
                if (data && data.forgotPasswordSms?.success) {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="phoneNumber">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl>
                        <FormLabel>شماره موبایل</FormLabel>
                        <Input id="phoneNumber" {...field} type="phone" />
                        {/* {data?.forgotPasswordSms?.errors.phoneNumber && (
                          <Text mt="1" color="red">
                            {
                              data?.forgotPasswordSms?.errors.phoneNumber[0]
                                .message
                            }
                          </Text>
                        )} */}
                      </FormControl>
                    )}
                  </Field>
                  <Stack spacing={6} mt="2">
                    <Stack
                      direction={{ base: 'column', sm: 'row' }}
                      align={'center'}
                      justifyContent={'end'}
                    >
                      <Link color={'primary'} href="/auth/login">
                        ورود
                      </Link>
                    </Stack>
                    <Button
                      colorScheme="primary"
                      rounded="full"
                      variant={'solid'}
                      type="submit"
                      isLoading={loading}
                    >
                      ارسال کد تایید
                    </Button>
                  </Stack>
                </Form>
              )}
            </Formik>
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
      <TermOfUseModal {...modal} />
    </>
  );
}
