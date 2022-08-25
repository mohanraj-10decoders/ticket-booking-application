import { createSlice } from '@reduxjs/toolkit';

interface ActionType {
  payload: { value: string; keyString: string };
  type: string;
}

export interface BookingObjectType {
  boarding: string;
  destination: string;
  date: String | null;
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
    ADDBOOKING: (state: BookingObjectType, { payload, type }: ActionType) => {
      console.log('action obj', type, payload);
      switch (payload.keyString) {
        case 'class':
          state.class = payload.value;
          break;
        case 'boarding':
          state.boarding = payload.value;
          break;
        case 'destination':
          state.destination = payload.value;
          break;
        case 'date':
          state.date = payload.value.toString();
          break;
        case 'travellers':
          state.travellers = payload.value;
          break;
        default:
          break;
      }
      //    state = {...state}
    },
    REMOVEBOOKING: (state: BookingObjectType, action: ActionType) => {},
  },
});

// Action creators are generated for each case reducer function
export const { ADDBOOKING, REMOVEBOOKING } = currentBookingSlice.actions;

export default currentBookingSlice.reducer;
