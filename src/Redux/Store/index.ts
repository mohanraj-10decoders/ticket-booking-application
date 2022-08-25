import { configureStore } from '@reduxjs/toolkit';
import CurrentBookingReducer from '../Reducer';

export default configureStore({
  reducer: {
    CurrentBookingReducer: CurrentBookingReducer,
  },
});
