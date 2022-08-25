import { createSlice } from '@reduxjs/toolkit';

interface ActionType {
  payload: any;
  type: string;
}

interface BookingObjectType {
  boarding: string;
  destination: string;
  date: Date | null;
  class: string;
  travellers: string;
}
const initialState: BookingObjectType = {
  boarding: '',
  destination: '',
  date: null,
  class: '',
  travellers: '',
};

export const currentBookingSlice = createSlice({
  name: 'currentBooking',
  initialState,
  reducers: {
    ADD: (state: BookingObjectType, action: ActionType) => {},
    REMOVE: (state: BookingObjectType, action: ActionType) => {},
  },
});

// Action creators are generated for each case reducer function
export const { ADD, REMOVE } = currentBookingSlice.actions;

export default currentBookingSlice.reducer;
