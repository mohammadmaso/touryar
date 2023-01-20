import { LazyQueryResult } from '@apollo/client/react/types/types';
import {
  Box,
  Button,
  Divider,
  Icon,
  Image,
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
  Wrap,
} from '@chakra-ui/react';
import * as Yup from 'yup';

import { FetchResult } from '@apollo/client/link/core/types';
import { ErrorMessage, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { BiTransfer } from 'react-icons/bi';
import { FiMapPin } from 'react-icons/fi';
import {
  AllCitiesOfProvinceQuery,
  AllProvincesOfCountryQuery,
  AllTransferTypesQuery,
  CreateSinglTransferMutation,
  CreateSinglTransferMutationVariables,
  Exact,
  Maybe,
  TripActivitieTypeEdge,
} from '../../../../graphql/generated/types';
import { createSelectorOptions } from '../../../../utils/selectOptions';
import SelectForm from '../../../SelectForm';

interface Props {
  isOpen: boolean;
  onClose: any;
  actions: {
    getProvincesOfCountry: (countryId: string) => void;
    getCitiesOfProvince: (provinceId: string) => void;
    getTransferTypes: () => void;
    createTransfer: (
      inputs: CreateSinglTransferMutationVariables
    ) => Promise<
      FetchResult<
        CreateSinglTransferMutation,
        Record<string, any>,
        Record<string, any>
      >
    >;
  };
  queries: {
    provincesOfCountryQuery: LazyQueryResult<
      AllProvincesOfCountryQuery,
      Exact<{
        allProvincesCountry?: Maybe<string> | undefined;
      }>
    >;
    citiesOfProvinceQuery: LazyQueryResult<
      AllCitiesOfProvinceQuery,
      Exact<{
        province: string;
      }>
    >;
    transferTypesQuery: LazyQueryResult<
      AllTransferTypesQuery,
      Exact<{
        [key: string]: never;
      }>
    >;
  };
  onAddTransfer: any;
  onDeleteActivity: any;
  selected: TripActivitieTypeEdge[];
}

const AddTransferModal = (props: Props) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchResult, setSearchResult] = useState();

  const [srcProvince, setSrcProvince] = useState();
  const [destProvince, setDestProvince] = useState();
  const [srcCity, setSrcCity] = useState();
  const [destCity, setDestCity] = useState();
  const [type, setType] = useState();

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value != null) {
    }
    setSearchInput(event.target.value);
  };

  const isActivitySelected = (id: string): boolean => {
    if (props.selected?.filter((item) => item.node?.id === id).length == 1) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (props.isOpen == true) {
      props.actions?.getProvincesOfCountry('Q291bnRyeVR5cGU6MQ=='); // Irans Provinces
      props.actions?.getTransferTypes();
    }
  }, [props.isOpen]);

  return (
    <Modal
      isOpen={props.isOpen}
      onClose={props.onClose}
      size="lg"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent rounded="none">
        <ModalHeader fontWeight="light">
          <Wrap align="center">
            <Icon as={BiTransfer} />
            <Text>رفت و آمد</Text>
          </Wrap>
        </ModalHeader>
        <ModalCloseButton />
        <Formik
          initialValues={{
            srcProvince: '',
            destProvince: '',
            destCity: '',
            srcCity: '',
            type: '',
          }}
          validationSchema={Yup.object().shape({
            srcProvince: Yup.string().required(
              'استان مبدا نمی‌تواند خالی باشد.'
            ),
            destProvince: Yup.string().required(
              'استان مقصد نمی‌تواند خالی باشد.'
            ),
            destCity: Yup.string().required('شهر مقصد نمی‌تواند خالی باشد.'),
            srcCity: Yup.string().required('شهر مبدا نمی‌تواند خالی باشد.'),
            type: Yup.string().required('نوع رفت آمد نمی تواند خالی باشد.'),
          })}
          onSubmit={(values, { setSubmitting, setFieldError }) => {
            props.actions
              .createTransfer({
                src: values.srcCity,
                destination: values.destCity,
                transferType: values.type,
                transferInput: {
                  startTime: null,
                  duration: 0,
                },
              })
              .then((res) => {
                if (res.data?.createTransfer?.success === true) {
                  props.onClose();
                  props.onAddTransfer(res.data.createTransfer?.transfer);
                }
              });
          }}
        >
          {(formProps) => (
            <Form>
              <ModalBody>
                <Stack>
                  <Divider />
                  <Wrap spacing="1" align="center">
                    <FiMapPin />
                    <Text fontWeight="extrabold">مبدا</Text>
                  </Wrap>
                  <Wrap
                    direction="column"
                    borderWidth="thin"
                    borderRadius="md"
                    p="2"
                  >
                    <SelectForm
                      name="استان مبدا را انتخاب کنید..."
                      options={
                        !props.queries.provincesOfCountryQuery?.data
                          ? [
                              {
                                label: 'استان مبدا را انتخاب کنید...',
                                value: null,
                              },
                            ]
                          : createSelectorOptions(
                              'name',
                              props.queries.provincesOfCountryQuery?.data
                                ?.allProvinces?.edges
                            )
                      }
                      inputChange={(inputValue: any) => {
                        formProps.setFieldValue(
                          'srcProvince',
                          inputValue?.value
                        );
                        props.actions.getCitiesOfProvince(inputValue?.value);
                        console.log(inputValue);
                      }}
                      loading={props.queries.provincesOfCountryQuery?.loading}
                    />
                    <Box fontSize="sm" textColor="red" my="2">
                      <ErrorMessage name="srcProvince" component="div" />
                    </Box>
                    <SelectForm
                      name="شهر مبدا را انتخاب کنید..."
                      options={
                        !props.queries.citiesOfProvinceQuery?.data
                          ? [
                              {
                                label: 'شهر مبدا را انتخاب کنید...',
                                value: null,
                              },
                            ]
                          : createSelectorOptions(
                              'name',
                              props.queries.citiesOfProvinceQuery?.data
                                ?.allCities?.edges
                            )
                      }
                      inputChange={(inputValue: any) => {
                        formProps.setFieldValue('srcCity', inputValue?.value);
                      }}
                      loading={props.queries.citiesOfProvinceQuery?.loading}
                    />
                    <Box fontSize="sm" textColor="red" my="2">
                      <ErrorMessage name="srcCity" component="div" />
                    </Box>
                  </Wrap>
                  <Divider />
                  <Wrap spacing="1" align="center">
                    <FiMapPin />
                    <Text fontWeight="extrabold">مقصد</Text>
                  </Wrap>
                  <Wrap
                    direction="column"
                    borderWidth="thin"
                    borderRadius="md"
                    p="2"
                  >
                    <SelectForm
                      name="استان مقصد را انتخاب کنید..."
                      options={
                        !props.queries.provincesOfCountryQuery?.data
                          ? [
                              {
                                label: 'استان مقصد را انتخاب کنید...',
                                value: null,
                              },
                            ]
                          : createSelectorOptions(
                              'name',
                              props.queries.provincesOfCountryQuery?.data
                                ?.allProvinces?.edges
                            )
                      }
                      inputChange={(inputValue: any) => {
                        formProps.setFieldValue(
                          'destProvince',
                          inputValue?.value
                        );
                        props.actions.getCitiesOfProvince(inputValue?.value);
                        console.log(inputValue);
                      }}
                      loading={props.queries.provincesOfCountryQuery?.loading}
                    />
                    <Box fontSize="sm" textColor="red" my="2">
                      <ErrorMessage name="destProvince" component="div" />
                    </Box>
                    <SelectForm
                      name="شهر مقصد را انتخاب کنید..."
                      options={
                        !props.queries.citiesOfProvinceQuery?.data
                          ? [
                              {
                                label: 'شهر مقصد را انتخاب کنید...',
                                value: null,
                              },
                            ]
                          : createSelectorOptions(
                              'name',
                              props.queries.citiesOfProvinceQuery?.data
                                ?.allCities?.edges
                            )
                      }
                      inputChange={(inputValue: any) => {
                        formProps.setFieldValue('destCity', inputValue?.value);
                      }}
                      loading={props.queries.citiesOfProvinceQuery?.loading}
                    />
                    <Box fontSize="sm" textColor="red" my="2">
                      <ErrorMessage name="destCity" component="div" />
                    </Box>
                  </Wrap>

                  <Divider />
                  <Wrap spacing="1" align="center">
                    <FiMapPin />
                    <Text fontWeight="extrabold">نوع رفت و آمد</Text>
                  </Wrap>
                  <RadioGroup
                    onChange={(value) => formProps.setFieldValue('type', value)}
                    value={formProps.values.type}
                  >
                    <Wrap>
                      {props.queries.transferTypesQuery.data?.allTransferType?.edges.map(
                        (item) => (
                          <Radio key={item?.node?.id} value={item?.node?.id!}>
                            <Image
                              h="30"
                              fallbackSrc="/images/placeholder.png"
                              src={item?.node?.svg!}
                              alt={item?.node?.title!}
                            />
                          </Radio>
                        )
                      )}
                    </Wrap>
                  </RadioGroup>
                  <Box fontSize="sm" textColor="red" my="2">
                    <ErrorMessage name="type" component="div" />
                  </Box>
                </Stack>
              </ModalBody>
              <ModalFooter>
                <Wrap>
                  <Button
                    isLoading={false}
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

export default AddTransferModal;
