import { LazyQueryResult, QueryResult } from '@apollo/client/react/types/types';
import { Box, Divider, Heading, HStack, Select, Stack } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  AllProvincesOfCountryQuery,
  AllTripCategoriesQuery,
  Exact,
  Maybe,
} from '../../graphql/generated/types';
interface Props {
  actions: any;
  queries: {
    categoriesQuery: QueryResult<
      AllTripCategoriesQuery,
      Exact<{
        [key: string]: never;
      }>
    >;
    provincesOfCountryQuery: LazyQueryResult<
      AllProvincesOfCountryQuery,
      Exact<{ allProvincesCountry?: Maybe<string> | undefined }>
    >;
  };

  onProvinceChange: (provinceId: string) => void;
  onCategoryChange: (categoryId: string) => void;
}
export function TravelogueListHeader(props: Props) {
  const [provinceName, setProvinceName] = useState('کل ایران');
  const [categoryName, setCategoryName] = useState('');
  useEffect(
    () => {
      props.actions?.getProvincesOfCountry('Q291bnRyeVR5cGU6MQ=='); // Irans Provinces
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Stack>
      <Heading fontSize="3xl">
        {`همه‌ی سفرهای${categoryName} ${provinceName}`}
      </Heading>
      <Divider />
      <HStack w="full">
        <Box w={['50vw', '50vw', '14vw']}>
          {/* <SelectForm
            name="جستجو بر اساس استان "
            options={
              !props.queries.provincesOfCountryQuery?.data
                ? [
                    {
                      label: 'کل ایران',
                      value: null,
                    },
                  ]
                : createSelectorOptions(
                    'name',
                    props.queries.provincesOfCountryQuery?.data?.allProvinces
                      ?.edges
                  )
            }
            inputChange={(inputValue: any) => {
              props.onProvinceChange(inputValue?.value);
              setProvinceName(inputValue.label);
            }}
            loading={props.queries.provincesOfCountryQuery?.loading}
          /> */}
          <Select
            size="sm"
            onChange={(e) => {
              let index = e.target.selectedIndex;
              props.onProvinceChange(e.target.value);
              // console.log(e.target[index].label);
              setProvinceName(e.target[index].label);
            }}
            variant="filled"
            placeholder="فیلتر استان"
          >
            {props.queries.provincesOfCountryQuery?.data?.allProvinces?.edges.map(
              (item) => (
                <option
                  key={item?.node?.id}
                  label={item?.node?.name}
                  value={item?.node?.id}
                ></option>
              )
            )}
          </Select>
        </Box>
        <Box w={['50vw', '50vw', '14vw']}>
          {/* <SelectForm
            name="دسته‌بندی سفر"
            options={
              !props.queries.categoriesQuery?.data
                ? [
                    {
                      label: 'همه دسته‌بندی‌ها',
                      value: null,
                    },
                  ]
                : createSelectorOptions(
                    'title',
                    props.queries.categoriesQuery?.data?.allTripCategories
                      ?.edges
                  )
            }
            inputChange={(inputValue: any) => {
              props.onCategoryChange(inputValue?.value);
              setCategoryName(inputValue.label);
            }}
            loading={props.queries.categoriesQuery?.loading}
          /> */}
          <Select
            size="sm"
            onChange={(e) => {
              let index = e.target.selectedIndex;
              props.onCategoryChange(e.target.value);
              setCategoryName(e.target[index].label);
            }}
            variant="filled"
            placeholder="دسته بندی تور"
          >
            {props.queries.categoriesQuery?.data?.allTripCategories?.edges.map(
              (item) => (
                <option key={item?.node?.id} value={item?.node?.id}>
                  {item?.node?.title}
                </option>
              )
            )}
          </Select>
        </Box>
      </HStack>
    </Stack>
  );
}
