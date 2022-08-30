import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { ADDBOOKING, BookingObjectType } from '../../Redux/Reducer';

export type optionType = Object & {
  value: string;
  label: string;
};

export type SelectValue = optionType | null | undefined;

export type propType = {
  keyString: string;
  data: optionType[];
};

export default function SingleSelect({ keyString, data }: propType) {
  const [selectedValue, setSelectedValue] = useState('');
  const booking: BookingObjectType = useSelector(
    (state: BookingObjectType) => state
  );
  const dispatch = useDispatch();
  const handleChange = (newValue: SelectValue) => {
    setSelectedValue(`${newValue?.value}`);
  };
  useEffect(() => {
    dispatch(
      ADDBOOKING({
        value: selectedValue === 'undefined' ? undefined : selectedValue,
        keyString: keyString,
      })
    );
  }, [selectedValue, booking, dispatch, keyString]);
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
