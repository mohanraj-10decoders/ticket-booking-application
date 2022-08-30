import React, { useContext } from 'react';
import classes from './BookingDetail.module.css';
import { BookingContext } from './BookHotel';

export default function BookingDeatil() {
  const bookingDetail = useContext(BookingContext);
  let { hotel, city, guest, checkIn, checkOut } = bookingDetail;

  return (
    <div>
      <h5 className={classes.title}>Your booking detail</h5>
      <section className={classes.details}>
        <div>
          <h6>City</h6>
          <p>{city}</p>
        </div>
        <div>
          <h6>Hotel</h6>
          <p>{hotel}</p>
        </div>
        <div>
          <h6>Guests</h6>
          <p>{guest}</p>
        </div>
        <div>
          <h6>Check-in</h6>
          <p>{checkIn?.toString().slice(4, 15)}</p>
        </div>
        <div>
          <h6>Check-out</h6>
          <p>{checkOut?.toString().slice(4, 15)}</p>
        </div>
      </section>
    </div>
  );
}
