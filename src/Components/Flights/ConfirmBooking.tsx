// import React from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import classes from './ConfirmBooking.module.css';

export default function ConfirmBooking({ price }: { price: string }) {
  const booking = useSelector(
    (state: RootState) => state.CurrentBookingReducer
  );
  let { boarding, destination, date, travelClass, travellers } = booking;
  return (
    <div className={classes.detailsContainer}>
      <div>
        <h5>Boarding : </h5>
        {boarding}
      </div>
      <div>
        <h5>Destination : </h5>
        {destination}
      </div>
      <div>
        <h5>Date : </h5>
        {date}
      </div>
      <div>
        <h5>No of Travellers : </h5>
        {travellers}
      </div>
      <div>
        <h5>Class : </h5>
        {travelClass}
      </div>
      <div>
        <h5>Price : </h5>
        {price}
      </div>
    </div>
  );
}
