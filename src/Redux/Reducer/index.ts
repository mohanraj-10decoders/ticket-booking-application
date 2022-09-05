import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface ActionType {
  payload: { value: string | undefined; keyString: string };
  type: string;
}

export interface BookingObjectType {
  id?: number;
  boarding: string | undefined;
  destination: string | undefined;
  date: string | undefined | null;
  travelClass: string | undefined;
  travellers: string | undefined;
  price: string;
}
const initialState: BookingObjectType = {
  boarding: '',
  destination: '',
  date: null,
  travelClass: '',
  travellers: '',
  price: '',
};

const testLog = createAsyncThunk('', () => {
  console.log('Thunk');
});

export const currentBookingSlice = createSlice({
  name: 'currentBooking',
  initialState,
  reducers: {
    ADDBOOKING: (state: BookingObjectType, { payload }: ActionType) => {
      switch (payload.keyString) {
        case 'travelClass':
          state.travelClass = payload.value;
          break;
        case 'boarding':
          state.boarding = payload.value;
          break;
        case 'destination':
          state.destination = payload.value;
          break;
        case 'date':
          state.date = payload.value;
          break;
        case 'travellers':
          state.travellers = payload.value;
          break;
        default:
          break;
      }
      //    state = {...state}
    },
  },
});

// Action creators are generated for each case reducer function
export const { ADDBOOKING } = currentBookingSlice.actions;

export default currentBookingSlice.reducer;
