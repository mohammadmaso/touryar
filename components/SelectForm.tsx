import React from 'react';
import {
  AsyncCreatableSelect,
  AsyncSelect,
  CreatableSelect,
  Select,
} from 'chakra-react-select';

interface Props {
  loading?: boolean;
  options: any;
  default?: any;
  isMulti?: boolean;
  name: any;
  inputChange: (inputValue: any) => void;
}

const SelectForm = (props: Props) => {
  return (
    <>
      <Select
        placeholder={props.name as string}
        className="basic-single"
        classNamePrefix={props.name}
        // defaultValue={props.options[0]}
        //   isDisabled={isDisabled}
        isLoading={props.loading}
        isClearable={true}
        isRtl={true}
        isSearchable={true}
        name={props.name}
        options={props.options}
        // label={props.name}
        onChange={props.inputChange}
        isMulti={props.isMulti ? props.isMulti : false}
        isDisabled={props.loading}
        defaultValue={props.default}
      />
    </>
  );
};

export default SelectForm;
