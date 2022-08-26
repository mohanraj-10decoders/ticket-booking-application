import { createSlice, current } from '@reduxjs/toolkit';
import { BookingObjectType } from '.';

interface HistoryActionType {
  payload: { value: BookingObjectType };
  type: string;
}

interface BookingHistoryType {
  data: BookingObjectType[];
}
// const testObj: BookingObjectType = {
//   boarding: 'Test',
//   destination: 'Test',
//   date: null,
//   travelClass: 'Test',
//   travellers: 'Test',
// };

const historyInitialState: BookingHistoryType = {
  data: [
    {
      boarding: 'Test',
      destination: '',
      date: null,
      travelClass: '',
      travellers: '',
    },
  ],
};

export const bookingHistorySlice = createSlice({
  name: 'bookingHistory',
  initialState: historyInitialState,
  reducers: {
    ADDHISTORY: (
      state: BookingHistoryType,
      { payload, type }: HistoryActionType
    ) => {
      console.log('old state', current(state));
      let newData = [...state.data, payload.value];
      //   state.data = [...state.data, payload.value];
      state.data = newData;
      console.log('new state', current(state));
      //   console.log('new state data', current(state.data));
    },
  },
});

export const { ADDHISTORY } = bookingHistorySlice.actions;

export default bookingHistorySlice.reducer;
