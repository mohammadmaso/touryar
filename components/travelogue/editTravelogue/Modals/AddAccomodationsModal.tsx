import {
  Box,
  Button,
  Divider,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
  Stack,
  Text,
  useToast,
  Wrap,
} from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';

import { FetchResult } from '@apollo/client/link/core/types';
import {
  LazyQueryResult,
  MutationResult,
} from '@apollo/client/react/types/types';
import { BiBed } from 'react-icons/bi';
import { HiOutlineHome } from 'react-icons/hi';
import {
  CreateResidenceMutation,
  CreateResidenceMutationVariables,
  Exact,
  GetAllResidenceTypesQuery,
  ResidenceType,
} from '../../../../graphql/generated/types';
import { SelectPointMap } from './SelectPointMap';

interface Props {
  data: any;
  isOpen: boolean;
  onClose: any;
  actions: {
    getAllResidenceType: () => void;
    createResidence: (
      inputs: CreateResidenceMutationVariables
    ) => Promise<
      FetchResult<
        CreateResidenceMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
  };
  queries: {
    allResidenceTypeQuery: LazyQueryResult<
      GetAllResidenceTypesQuery,
      Exact<{
        [key: string]: never;
      }>
    >;
    createResidenceStatus: MutationResult<CreateResidenceMutation>;
  };
  onAddAccommodation: (residence: ResidenceType) => void;
}

const AddAccommodationsModal = (props: Props) => {
  const [location, setLocation] = useState<any>([]);
  const toast = useToast();

  useEffect(() => {
    if (props.isOpen == true) {
      props.actions?.getAllResidenceType();
    }
  }, [props.isOpen, props.actions]);

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
            <Icon as={BiBed} />
            <Text>افزودن اقامت</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            name: '',
            stayDuration: 0,
            latitude: '',
            longitude: '',
            residenceType: '',
          }}
          validationSchema={Yup.object().shape({
            name: Yup.string().required('نام اقامتگاه نمی‌تواند خالی باشد.'),
            residenceType: Yup.string().required(
              'نوع اقامتگاه نمی‌تواند خالی باشد.'
            ),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            props.actions
              .createResidence({
                tripId: props.data.id as string,
                name: values.name,
                stayDuration: values.stayDuration,
                latitude: location.latitude,
                longitude: location.longitude,
                residenceType: values.residenceType,
              })
              .then((res) => {
                if (res.data?.createResidence?.success == true) {
                  props.onClose();
                }
                if (res.data?.createResidence?.success == false) {
                  toast({
                    title: 'خطا در بارگذاری اقامتگاه',
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
                <Field name="name">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl isRequired>
                      <FormLabel>نام اقامتگاه</FormLabel>
                      <Input id="name" {...field} type="text" />
                      <Box textColor="red" fontSize="sm" my="2">
                        <ErrorMessage name="name" component="div" />
                      </Box>
                    </FormControl>
                  )}
                </Field>
                <Field name="stayDuration">
                  {({ field, form }: { field: any; form: any }) => (
                    <FormControl>
                      <FormLabel>مدت روز اقامت</FormLabel>
                      <Input
                        onChange={(value) =>
                          formProps.setFieldValue('stayDuration', value)
                        }
                        id="stayDuration"
                        {...field}
                        type="number"
                      />
                      <Box textColor="red" fontSize="sm" my="2">
                        <ErrorMessage name="stayDuration" component="div" />
                      </Box>
                    </FormControl>
                  )}
                </Field>
                <SelectPointMap
                  setLocation={(location: any) => setLocation(location)}
                  initialLocation={{
                    longitude: props.data.province.longitude,
                    latitude: props.data.province.latitude,
                  }}
                />
                <Divider py="2" />
                <Wrap spacing="1" align="center" py="2">
                  <HiOutlineHome />
                  <Text fontWeight="extrabold">نوع اقامتگاه</Text>
                </Wrap>
                <FormControl>
                  <RadioGroup
                    onChange={(value) =>
                      formProps.setFieldValue('residenceType', value)
                    }
                    value={formProps.values.residenceType}
                  >
                    <Wrap>
                      {props.queries.allResidenceTypeQuery.data?.allResidenceTypes?.edges.map(
                        (item) => (
                          <Radio key={item?.node?.id} value={item?.node?.id!}>
                            <Stack
                              justifyContent={'center'}
                              alignItems={'center'}
                            >
                              <Image
                                h="30"
                                src={item?.node?.svg!}
                                alt={item?.node?.name!}
                                fallbackSrc="/images/placeholder.png"
                              />{' '}
                              <Text fontSize={'sm'}>{item?.node?.name!}</Text>
                            </Stack>
                          </Radio>
                        )
                      )}
                    </Wrap>
                  </RadioGroup>
                  <Box textColor="red" my="2">
                    <ErrorMessage name="residenceType" component="div" />
                  </Box>
                </FormControl>
              </ModalBody>
              <ModalFooter>
                <Wrap>
                  <Button
                    isLoading={props.queries?.createResidenceStatus?.loading}
                    colorScheme="primary"
                    variant="ghost"
                    size="sm"
                    type="submit"
                  >
                    اضافه کردن
                  </Button>
                  <Button
                    colorScheme="red"
                    variant="ghost"
                    size="sm"
                    onClick={props.onClose}
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

export default AddAccommodationsModal;
