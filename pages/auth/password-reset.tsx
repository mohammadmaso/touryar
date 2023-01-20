import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  Stack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';

import Head from 'next/head';
import CircleLogo from '../../components/logos/CircleLogo';
import TermOfUseModal from '../../components/Modals/TermOfUseModal';
import { useResetPasswordSmsMutation } from '../../graphql/generated/types';
import { useRandomPicture } from '../../hooks/useRandomePicture';

export default function SingUp() {
  const router = useRouter();

  const [phone, setPhone] = useState('');
  const toast = useToast();
  const modal = useDisclosure();

  const [resetPassword, { loading, data }] = useResetPasswordSmsMutation({
    onCompleted: (data) => {
      if (data && data.resetPasswordSms?.success) {
        router.push({
          pathname: '/auth/login',
        });
        toast({
          title: 'رمزعبور با موفقیت تغییر کرد',
          description: 'اکنون با رمزعبور جدید وارد شوید.',
          status: 'info',
          duration: 6000,
          isClosable: true,
          position: 'top-right',
        });
      }
    },
  });

  return (
    <>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Head>
          <title> توریار | تغییر رمزعبور</title>
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
              تغییر رمز عبور
            </Heading>

            <Formik
              initialValues={{
                phoneNumber: router.query.phone,
                password1: '',
                password2: '',
                code: '',
              }}
              onSubmit={(values, { setSubmitting }) => {
                resetPassword({
                  variables: {
                    resetPasswordSmsCode: values.code,
                    resetPasswordSmsNewPassword1: values.password1,
                    resetPasswordSmsNewPassword2: values.password2,
                    resetPasswordSmsPhoneNumber: router.query.phone as string,
                  },
                });
                if (data && data.resetPasswordSms?.success) {
                  setSubmitting(false);
                }
              }}
            >
              {({ isSubmitting }) => (
                <Form>
                  <Field name="code">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl>
                        <FormLabel>کد ارسال شده</FormLabel>
                        <Input id="code" {...field} type="number" />
                        {/* {data?.resetPasswordSms?.errors.code && (
                          <Text mt="1" color="red">
                            {data?.resetPasswordSms?.errors.code[0].message}
                          </Text>
                        )} */}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password1">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl>
                        <FormLabel>رمزعبور جدید</FormLabel>
                        <Input {...field} id="password1" type="password" />
                        {/* {data?.resetPasswordSms?.errors.password1 && (
                          <Text mt="1" color="red">
                            {
                              data?.resetPasswordSms?.errors.password1[0]
                                .message
                            }
                          </Text>
                        )} */}
                      </FormControl>
                    )}
                  </Field>
                  <Field name="password2">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl>
                        <FormLabel>تکرار رمزعبور</FormLabel>
                        <Input {...field} id="password2" type="password" />
                        {/* {data?.resetPasswordSms?.errors.password2 && (
                          <Text mt="1" color="red">
                            {
                              data?.resetPasswordSms?.errors.password2[0]
                                .message
                            }
                          </Text>
                        )} */}
                      </FormControl>
                    )}
                  </Field>
                  <Stack spacing={6} mt="2">
                    <Button
                      colorScheme="primary"
                      rounded="full"
                      variant={'solid'}
                      type="submit"
                      isLoading={loading}
                    >
                      تغییر رمز ورود
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
