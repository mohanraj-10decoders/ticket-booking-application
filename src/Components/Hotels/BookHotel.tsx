import React from 'react';
import { propType } from '../Flights/BookingCard';
import SingleSelect from '../Flights/DropDownComponent';

export default function BookHotel() {
  const hotelOptions: propType = {
    options: {
      keyString: 'travellers',
      data: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
      ],
    },
  };
  return (
    <div>
      <SingleSelect {...hotelOptions.options} />
    </div>
  );
}
