import React, { createContext, useEffect, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { optionType, SelectValue } from '../Flights/DropDownComponent';
import classes from './BookHotel.module.css';
import BookingDeatil from './BookingDeatil';

export interface BookingType {
  city: string | undefined;
  hotel: string | undefined;
  guest: string | undefined;
  checkIn: Date | undefined;
  checkOut: Date | undefined;
}

export const BookingContext = createContext<BookingType>({
  city: '',
  hotel: '',
  guest: '',
  checkIn: new Date(),
  checkOut: new Date(),
});

export default function BookHotel() {
  let initState = {
    city: '',
    hotel: '',
    guest: '',
    checkIn: new Date(),
    checkOut: new Date(),
  };
  const [state, setState] = useState<BookingType>(initState);
  const [isConfirmed, setisConfirmed] = useState(false);
  const cityOptions: optionType[] = [
    { label: 'Hyderabad', value: 'Hyderabad' },
    { label: 'Chennai', value: 'Chennai' },
    { label: 'Mumbai', value: 'Mumbai' },
    { label: 'Delhi', value: 'Delhi' },
    { label: 'Bangalore', value: 'Bangalore' },
    { label: 'Kochi', value: 'Kochi' },
  ];
  const hotelOptions: optionType[] = [
    { label: 'ITC', value: 'ITC' },
    { label: 'Taj', value: 'Taj' },
    { label: 'Rambagh', value: 'Rambagh' },
    { label: 'Oberoi', value: 'Oberoi' },
    { label: 'Novotel', value: 'Novotel' },
    { label: 'Imperial', value: 'Imperial' },
  ];
  const headCountOptions: optionType[] = [
    { label: '1', value: '1' },
    { label: '2', value: '2' },
    { label: '3', value: '3' },
    { label: '4', value: '4' },
    { label: '5', value: '5' },
    { label: '6', value: '6' },
  ];
  const buttonEnabled =
    state.hotel && state.guest && state.checkIn && state.checkOut && state.city;

  useEffect(() => {
    if (!buttonEnabled) setisConfirmed(false);
  }, [buttonEnabled]);
  return (
    <>
      <div className={classes.bookingContainer}>
        <div className={classes.selectField}>
          <h5>City</h5>
          <Select
            className='basic-single'
            classNamePrefix='select'
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name='color'
            options={cityOptions}
            onChange={(newValue: SelectValue) => {
              setState({ ...state, city: newValue?.value });
            }}
          />
        </div>
        <div className={classes.selectField}>
          <h5>Hotel</h5>
          <Select
            className='basic-single'
            classNamePrefix='select'
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name='color'
            options={hotelOptions}
            onChange={(newValue: SelectValue) => {
              setState({ ...state, hotel: newValue?.value });
            }}
          />
        </div>
        <div className={classes.selectField}>
          <h5>Guests</h5>
          <Select
            className='basic-single'
            classNamePrefix='select'
            isDisabled={false}
            isLoading={false}
            isClearable={true}
            isRtl={false}
            isSearchable={true}
            name='color'
            options={headCountOptions}
            onChange={(newValue: SelectValue) => {
              setState({ ...state, guest: newValue?.value });
            }}
          />
        </div>
        <div className={classes.selectField}>
          <h5>Check-in</h5>
          <DatePicker
            selected={state.checkIn}
            minDate={new Date()}
            onChange={(date: Date) => {
              setState({ ...state, checkIn: date });
            }}
            style={{ padding: '0px' }}
          />
        </div>
        <div className={classes.selectField}>
          <h5>Check-out</h5>
          <DatePicker
            selected={state.checkOut}
            minDate={state.checkIn}
            onChange={(date: Date) => {
              setState({ ...state, checkOut: date });
            }}
            style={{ padding: '0px' }}
          />
        </div>
      </div>
      <button
        className={classes.confirmButton}
        disabled={!buttonEnabled}
        onClick={() => setisConfirmed(true)}
      >
        Confirm Booking
      </button>
      <BookingContext.Provider value={state}>
        {buttonEnabled && isConfirmed && <BookingDeatil />}
      </BookingContext.Provider>
    </>
  );
}
