import { configureStore } from '@reduxjs/toolkit';
import CurrentBookingReducer from '../Reducer';
import BookingHistoryReducer from '../Reducer/historySlice';

const store = configureStore({
  reducer: {
    CurrentBookingReducer: CurrentBookingReducer,
    BookingHistoryReducer: BookingHistoryReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
