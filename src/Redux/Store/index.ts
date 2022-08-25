import { configureStore } from '@reduxjs/toolkit';
import CurrentBookingReducer from '../Reducer';

const store = configureStore({
  reducer: {
    CurrentBookingReducer: CurrentBookingReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
