import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
  Box,
  Button,
  ButtonGroup,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  Textarea,
  useDisclosure,
  useToast,
  Wrap,
} from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';

import {
  LazyQueryResult,
  MutationResult,
  QueryResult,
} from '@apollo/client/react/types/types';
import { useRouter } from 'next/router';
import { FiArrowLeft, FiTrash, FiUpload } from 'react-icons/fi';
import { MdCardTravel } from 'react-icons/md';
import * as Yup from 'yup';
import {
  AllCountriesQuery,
  AllProvincesOfCountryQuery,
  AllTripCategoriesQuery,
  CreateInitialTripMutation,
  Exact,
  Maybe,
  TripInput,
  TripRelatedInput,
} from '../../../graphql/generated/types';
import { createSelectorOptions } from '../../../utils/selectOptions';
import DatePicker from '../../DatePicker';
import SelectForm from '../../SelectForm';

interface Props {
  actions: {
    createInitialTrip: (
      inputs: Exact<{
        createTripTripInput: TripInput;
        createTripTripRelatedInput: TripRelatedInput;
        createTripProvince: string;
        createTripCountry: string;
      }>
    ) => any;
    getProvincesOfCountry: (countryId: string) => void;
  };
  status: {
    createInitialTripStatus: MutationResult<CreateInitialTripMutation>;
  };
  queries: {
    countriesQuery: QueryResult<
      AllCountriesQuery,
      Exact<{
        [key: string]: never;
      }>
    >;
    provincesOfCountryQuery: LazyQueryResult<
      AllProvincesOfCountryQuery,
      Exact<{
        allProvincesCountry?: Maybe<string>;
      }>
    >;
    categoriesQuery: QueryResult<
      AllTripCategoriesQuery,
      Exact<{
        [key: string]: never;
      }>
    >;
  };
}

const InitTravelogue = ({ queries, actions, status }: Props) => {
  const toast = useToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const alert = useDisclosure();
  const cancelRef = React.useRef(null);

  const router = useRouter();

  const inputFileImage = React.useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = React.useState(
    '/images/placeholder.png'
  );

  const onImageButtonClick = () => {
    // `current` points to the mounted file input element
    inputFileImage?.current?.click();
  };

  return (
    <>
      <Modal
        isOpen={true}
        onClose={onClose}
        size="3xl"
        closeOnEsc={false}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent rounded="none">
          <ModalHeader fontWeight="light">
            <Wrap align="center">
              <Icon as={MdCardTravel} />
              <Text>سفرنامه جدید</Text>
            </Wrap>
          </ModalHeader>
          <Formik
            initialValues={{
              title: '',
              image: null,
              province: '',
              endDate: '',
              startDate: '',
              country: '',
              description: '',
              categories: [],
            }}
            validationSchema={Yup.object().shape({
              title: Yup.string().required('عنوان تور نمی‌تواند خالی باشد!'),
              province: Yup.string().required('استان تور نمی‌تواند خالی باشد.'),
              country: Yup.string().required('کشور نمی‌تواند خالی باشد.'),
              // image: Yup.string().required(
              //   'تصویر نمایه سفر نمی‌تواند خالی باشد.'
              // ),
            })}
            onSubmit={(values, { setSubmitting, setFieldError }) => {
              actions.createInitialTrip({
                createTripTripInput: {
                  title: values.title,
                  published: false,
                  description: values.description,
                  defaultImage: values.image,
                  startDate: values.startDate,
                  endDate: values.endDate,
                },
                createTripTripRelatedInput: {
                  categories: values.categories,
                },
                createTripCountry: values.country,
                createTripProvince: values.province,
              });
            }}
          >
            {(formProps) => (
              <Form>
                <ModalBody>
                  <Field name="title">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl isRequired>
                        <FormLabel>عنوان سفرنامه</FormLabel>
                        <Input
                          placeholder="مثلا: پیمایش خلخال به اسالم"
                          id="title"
                          {...field}
                          type="text"
                        />
                        <Box textColor="red" my="2">
                          <ErrorMessage name="title" component="div" />
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                  <Stack>
                    <SelectForm
                      name="موضوعات تور"
                      options={
                        !queries.categoriesQuery.data
                          ? [{ label: '...', value: null }]
                          : createSelectorOptions(
                              'title',
                              queries.categoriesQuery.data.allTripCategories
                                ?.edges
                            )
                      }
                      isMulti={true}
                      inputChange={(inputValue: any) => {
                        console.log(inputValue);
                        let a = inputValue.map((item: any) => item.value);
                        formProps.setFieldValue('categories', a);
                      }}
                      loading={queries.categoriesQuery.loading}
                    />
                    <Box textColor="red" my="2">
                      <ErrorMessage name="province" component="div" />
                    </Box>
                  </Stack>
                  <Field name="description">
                    {({ field, form }: { field: any; form: any }) => (
                      <FormControl>
                        <FormLabel>توضیح کوتاه</FormLabel>
                        <Textarea
                          placeholder="توضیات مختصر راجع به سفر شما"
                          id="description"
                          {...field}
                          type="text"
                        />
                        <Box textColor="red" my="2">
                          <ErrorMessage name="description" component="div" />
                        </Box>
                      </FormControl>
                    )}
                  </Field>
                  <Wrap w="full">
                    <Stack flex={1}>
                      <SelectForm
                        name="انتخاب کشور"
                        options={
                          queries.countriesQuery.loading
                            ? null
                            : createSelectorOptions(
                                'name',
                                queries.countriesQuery.data?.allCountries?.edges
                              )
                        }
                        inputChange={(inputValue: any) => {
                          formProps.setFieldValue('country', inputValue?.value);
                          actions.getProvincesOfCountry(inputValue?.value);
                        }}
                        loading={queries.countriesQuery.loading}
                      />
                      <Box textColor="red" my="2">
                        <ErrorMessage name="country" component="div" />
                      </Box>
                    </Stack>
                    <Stack flex={1}>
                      <SelectForm
                        name="انتخاب استان"
                        options={
                          !queries.provincesOfCountryQuery.data
                            ? [{ label: 'کشور را انتخاب کنید.', value: null }]
                            : createSelectorOptions(
                                'name',
                                queries.provincesOfCountryQuery.data
                                  .allProvinces?.edges
                              )
                        }
                        inputChange={(inputValue: any) => {
                          formProps.setFieldValue(
                            'province',
                            inputValue?.value
                          );
                        }}
                        loading={queries.provincesOfCountryQuery.loading}
                      />
                      <Box textColor="red" my="2">
                        <ErrorMessage name="province" component="div" />
                      </Box>
                    </Stack>
                  </Wrap>

                  <Wrap>
                    <Field flex={1} name="startDate">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>تاریخ شروع تور</FormLabel>
                          <DatePicker
                            onDateChange={(date: any) =>
                              formProps.setFieldValue('startDate', date)
                            }
                          />
                          <Box textColor="red" mt="2">
                            <ErrorMessage name="startDate" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                    <Field flex={1} name="endDate">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>تاریخ پایان سفر</FormLabel>
                          <DatePicker
                            onDateChange={(date: any) =>
                              formProps.setFieldValue('endDate', date)
                            }
                          />
                          <Box textColor="red" mt="2">
                            <ErrorMessage name="endDate" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                  </Wrap>
                  <Box
                    my="3"
                    border="gray"
                    borderWidth="2"
                    borderColor="gray.300"
                    borderStyle="dashed"
                    borderRadius="xl"
                    p="3"
                  >
                    <Flex
                      direction={{
                        base: 'column',
                        sm: 'column',
                        md: 'row',
                        lg: 'row',
                        xl: 'row',
                      }}
                    >
                      <FormControl>
                        <FormLabel>تصویر نمایه تور</FormLabel>
                        <input
                          type="file"
                          id="file"
                          ref={inputFileImage}
                          style={{ display: 'none' }}
                          accept="image/*"
                          onChange={(e: any) => {
                            const fileReader = new FileReader();
                            fileReader.onload = () => {
                              if (fileReader.readyState === 2) {
                                formProps.setFieldValue(
                                  'image',
                                  e.target.files[0]
                                );
                                setImagePreview(fileReader.result as string);
                              }
                            };
                            fileReader.readAsDataURL(e.target.files[0]);
                          }}
                        />
                        <Button
                          variant="solid"
                          size="sm"
                          rounded="md"
                          colorScheme="primary"
                          onClick={onImageButtonClick}
                          rightIcon={<FiUpload />}
                          mb="3"
                        >
                          آپلود تصویر
                        </Button>
                        {imagePreview && (
                          <Button
                            variant="ghost"
                            size="sm"
                            rounded="md"
                            colorScheme="red"
                            onClick={() => {
                              setImagePreview('//images/placeholder.png');
                              formProps.setFieldValue('image', null);
                            }}
                            rightIcon={<FiTrash />}
                            mb="3"
                          />
                        )}

                        <Box textColor="red" my="2">
                          <ErrorMessage name="image" component="div" />
                        </Box>
                      </FormControl>
                      <Box
                        w={{
                          base: '100%',
                          sm: '100%',
                          md: '48%',
                          lg: '48%',
                          xl: '48%',
                        }}
                      >
                        <Image
                          rounded="lg"
                          src={imagePreview}
                          alt="تصویر سفر"
                          fallbackSrc="/images/placeholder.png"
                        />
                      </Box>
                    </Flex>
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Wrap>
                    <Button
                      isLoading={status?.createInitialTripStatus?.loading}
                      colorScheme="primary"
                      variant="ghost"
                      size="sm"
                      type="submit"
                      rightIcon={<FiArrowLeft />}
                    >
                      ذخیره و ادامه
                    </Button>
                    <Button
                      colorScheme="red"
                      variant="ghost"
                      size="sm"
                      onClick={alert.onOpen}
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

      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={alert.onClose}
        isOpen={alert.isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent rounded="none">
          {/* <AlertDialogHeader>حذف تغییرات</AlertDialogHeader> */}
          <AlertDialogCloseButton />
          <AlertDialogBody mt="2">
            آیا برای انصراف از ثبت تور مطمعن هستید؟
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup size="sm">
              <Button colorScheme="red" onClick={() => router.back()}>
                بله،سفر رو حذف کن!
              </Button>
              <Button ref={cancelRef} onClick={alert.onClose}>
                انصراف
              </Button>
            </ButtonGroup>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default InitTravelogue;
