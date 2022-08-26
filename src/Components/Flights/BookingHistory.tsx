import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';

export default function BookingHistory() {
  const bookingHistory = useSelector(
    (state: RootState) => state.BookingHistoryReducer
  );
  console.log('Booking history', bookingHistory.data);
  return (
    <div>
      {bookingHistory.data.map((booking) => {
        return <div>{booking.boarding}</div>;
      })}
    </div>
  );
}
