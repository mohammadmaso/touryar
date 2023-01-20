import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  Text,
  Stack,
  Icon,
  Wrap,
  Center,
  FormControl,
  Input,
  FormErrorMessage,
  Textarea,
  Box,
  useToast,
} from '@chakra-ui/react';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { BiCommentAdd } from 'react-icons/bi';
import {
  CreateTripReviewMutation,
  useMeFollowingsQuery,
} from '../../graphql/generated/types';
import ApiLoading from '../ApiLoading';
import UserSimpleListCard from '../cards/UserSimpleListCard';

import * as Yup from 'yup';
import { FetchResult } from '@apollo/client/link/core/types';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions: {
    addReview: (
      id: string,
      review: string
    ) => Promise<
      FetchResult<
        CreateTripReviewMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
  };
  contentId: string;
  status: any;
}

const AddReviewModal = (props: Props) => {
  const toast = useToast();

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="lg"
      isCentered
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader fontWeight="light">
          <Wrap align="center">
            <Icon as={BiCommentAdd} />
            <Text>افزودن نظر</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            id: props.contentId,
            review: '',
          }}
          validationSchema={Yup.object().shape({
            review: Yup.string().required('نظر نمی‌تواند خالی باشد!'),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            props.actions.addReview(values.id, values.review).then((res) => {
              if (res.data && res.data.createTripReview?.success) {
                setSubmitting(false);
                props.onClose();
                toast({
                  title: 'نظر شما با موفقیت اضافه شد.',
                  // description:
                  //   'برای اضافه کردن نقد و بررسی باید کاربر سایت باشید، ثبت‌نام کنید یا وارد شوید.',
                  status: 'success',
                  duration: 4000,
                  isClosable: true,
                  position: 'top-right',
                });
              }
            });
          }}
        >
          {(formProps) => (
            <Form>
              <ModalBody>
                <Field name="review">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      {/* <FormLabel>نام کاربری (اختیاری)</FormLabel> */}
                      <Textarea
                        placeholder="نظر و بررسی خود را بنویسید..."
                        id="review"
                        {...field}
                        type="text"
                      />
                      <Box textColor="red" mt="2">
                        <ErrorMessage name="review" component="div" />
                      </Box>
                    </FormControl>
                  )}
                </Field>
              </ModalBody>
              <ModalFooter>
                <Wrap>
                  <Button
                    isLoading={props.status.loading}
                    colorScheme="primary"
                    variant="ghost"
                    size="sm"
                    type="submit"
                  >
                    ثبت
                  </Button>
                  <Button
                    onClick={props.onClose}
                    colorScheme="red"
                    variant="ghost"
                    size="sm"
                  >
                    انصراف
                  </Button>
                </Wrap>
              </ModalFooter>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </Modal>
  );
};

export default AddReviewModal;
