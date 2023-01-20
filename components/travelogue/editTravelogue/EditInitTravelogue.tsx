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

import { FetchResult } from '@apollo/client/link/core/types';
import {
  LazyQueryResult,
  MutationResult,
  QueryResult,
} from '@apollo/client/react/types/types';
import { DatePicker } from 'jalali-react-datepicker';
import { useRouter } from 'next/router';
import { FiArrowLeft, FiTrash, FiUpload } from 'react-icons/fi';
import { MdCardTravel } from 'react-icons/md';
import * as Yup from 'yup';
import {
  AllCountriesQuery,
  AllProvincesOfCountryQuery,
  AllTripCategoriesQuery,
  Exact,
  Maybe,
  TripDetailQuery,
  UpdateTripMutation,
  UpdateTripMutationVariables,
} from '../../../graphql/generated/types';
import { createSelectorOptions } from '../../../utils/selectOptions';
import SelectForm from '../../SelectForm';

interface Props {
  actions: {
    updateTrip: (
      inputs: UpdateTripMutationVariables
    ) => Promise<
      FetchResult<UpdateTripMutation, Record<string, any>, Record<string, any>>
    >;
    getProvincesOfCountry: (countryId: string) => void;
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
    updateTripStatus: MutationResult<UpdateTripMutation>;
  };
  isOpen: boolean;
  onClose: any;
  data: TripDetailQuery;
}

const getChangedValues = (values: any, initialValues: any) => {
  return Object.entries(values).reduce((acc: any, [key, value]) => {
    const hasChanged = initialValues[key] !== value;

    if (hasChanged) {
      acc[key] = value;
    }

    return acc;
  }, {});
};

const EditInitTravelogue = ({
  queries,
  actions,
  isOpen,
  data,
  ...rest
}: Props) => {
  const toast = useToast();
  const alert = useDisclosure();
  const cancelRef = React.useRef(null);

  const router = useRouter();

  const inputFileImage = React.useRef<HTMLInputElement>(null);

  const [imagePreview, setImagePreview] = React.useState(
    data.trip?.defaultImage || '//images/placeholder.png'
  );

  const onImageButtonClick = () => {
    // `current` points to the mounted file input element
    inputFileImage?.current?.click();
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={rest.onClose}
        size="3xl"
        closeOnEsc={false}
        motionPreset="slideInBottom"
        closeOnOverlayClick={false}
      >
        <ModalOverlay />
        <ModalContent rounded="none" fontSize="sm">
          <ModalHeader fontWeight="light">
            <Wrap align="center">
              <Icon as={MdCardTravel} />
              <Text>ویرایش اطلاعات اولیه</Text>
            </Wrap>
          </ModalHeader>
          <Formik
            initialValues={{
              title: data.trip?.title,
              image: data.trip?.defaultImage,
              province: data.trip?.province.id,
              country: data.trip?.country.id,
              description: data.trip?.description,
              categories:
                data.trip?.categories.edges.map((item) => item?.node?.id) || [],
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
              actions
                .updateTrip({
                  tripId: data.trip?.id as string,
                  tripData: {
                    title: values.title,
                    // defaultImage: values.image,
                    description: values.description,
                  },
                  country: values.country,
                  tripRelatedData: {
                    categories: values.categories as Maybe<string>[],
                  },
                  province: values.province,
                })
                .then((res) => {
                  if (res.data?.updateTrip?.success == true) {
                    rest.onClose();
                  }
                  if (res.data?.updateTrip?.success == false) {
                    toast({
                      title: 'خطا در بروزرسانی تور',
                      status: 'error',
                      duration: 8000,
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
                      loading={queries.categoriesQuery?.loading}
                      default={data.trip?.categories?.edges.map((item) => ({
                        label: item?.node?.title,
                        value: item?.node?.id,
                      }))}
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
                          placeholder="توضیات مختصر راجع به تور شما"
                          id="description"
                          {...field}
                          type="text"
                          whiteSpace="pre-line"
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
                        loading={queries.countriesQuery?.loading}
                        default={{
                          label: data.trip?.country.name,
                          value: data.trip?.country.id,
                        }}
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
                            ? [{ label: 'انتخاب استان', value: null }]
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
                        default={{
                          label: data.trip?.province.name,
                          value: data.trip?.province.id,
                        }}
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
                          <DatePicker timePicker={false} />
                          <Box textColor="red" mt="2">
                            <ErrorMessage name="startDate" component="div" />
                          </Box>
                        </FormControl>
                      )}
                    </Field>
                    <Field flex={1} name="endDate">
                      {({ field, form }: { field: any; form: any }) => (
                        <FormControl>
                          <FormLabel>تاریخ پایان تور</FormLabel>
                          <DatePicker timePicker={false} />
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
                              setImagePreview('/images/placeholder.png');
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
                          alt="تصویر تور"
                          fallbackSrc="/images/placeholder.png"
                        />
                      </Box>
                    </Flex>
                  </Box>
                </ModalBody>
                <ModalFooter>
                  <Wrap>
                    <Button
                      isLoading={queries?.updateTripStatus?.loading}
                      colorScheme="primary"
                      variant="ghost"
                      size="sm"
                      type="submit"
                      rightIcon={<FiArrowLeft />}
                    >
                      بروزرسانی
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
            آیا برای انصراف از تغییر تور مطمعن هستید؟
          </AlertDialogBody>
          <AlertDialogFooter>
            <ButtonGroup size="sm">
              <Button
                colorScheme="red"
                onClick={() => {
                  rest.onClose();
                  alert.onClose();
                }}
              >
                حذف تغییرات و بستن
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

export default EditInitTravelogue;
