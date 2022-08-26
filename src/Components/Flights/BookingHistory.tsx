import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import classes from './BookingHistory.module.css';

export default function BookingHistory() {
  const bookingHistory = useSelector(
    (state: RootState) => state.BookingHistoryReducer
  );
  console.log('Booking history', bookingHistory.data);
  return (
    <>
      <table className={classes.table}>
        <tr>
          <th>Sl.No</th>
          <th>Boarding</th>
          <th>Destination</th>
          <th>No of Travellers</th>
          <th>Class</th>
          <th>Date</th>
          <th>Price</th>
        </tr>
        {bookingHistory.data.map((booking, index) => {
          if (index !== 0)
            return (
              <tr>
                <td>{index}</td>
                <td>{booking.boarding}</td>
                <td>{booking.destination}</td>
                <td>{booking.travellers}</td>
                <td>{booking.travelClass}</td>
                <td>
                  {booking.date ? Date.parse(booking.date) : booking.date}
                </td>
                <td>Rs. 4,899</td>
              </tr>
            );
          else return null;
        })}
      </table>
      {bookingHistory.data.length < 2 && (
        <div className={classes.noHistoryMsg}>No booking history available</div>
      )}
    </>
  );
}
