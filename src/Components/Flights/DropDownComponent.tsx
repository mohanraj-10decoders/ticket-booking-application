import React, { useEffect, useState } from 'react';
import Select from 'react-select';

type optionType = Object & {
  value: string;
  label: string;
};

type SelectValue = optionType | null | undefined;

type propType = {
  keyString: string;
  data: optionType[];
};

export default function SingleSelect({ keyString, data }: propType) {
  const [selectedValue, setSelectedValue] = useState('');
  const handleChange = (newValue: SelectValue) => {
    setSelectedValue(`${newValue?.value}`);
  };
  useEffect(() => {
    console.log('props', keyString, data, selectedValue);
  }, [selectedValue, data, keyString]);
  return (
    <>
      <Select
        className='basic-single'
        classNamePrefix='select'
        isDisabled={false}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name='color'
        options={data}
        onChange={(newValue: SelectValue) => {
          handleChange(newValue);
        }}
      />
    </>
  );
}
