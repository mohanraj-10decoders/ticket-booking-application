import { createSlice, current } from '@reduxjs/toolkit';
import { BookingObjectType } from '.';

interface HistoryActionType {
  payload: { value: BookingObjectType };
  type: string;
}

interface DeleteHistoryType {
  payload: { id: number | undefined };
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
      id: 0,
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
      let newData = [
        ...state.data,
        { id: state.data.length, ...payload.value },
      ];
      //   state.data = [...state.data, payload.value];
      state.data = newData;
      console.log('new state', current(state));
      //   console.log('new state data', current(state.data));
    },
    DELETEHISTORYBYID: (
      state: BookingHistoryType,
      { payload }: DeleteHistoryType
    ) => {
      let newData = state.data.filter((da) => da.id !== payload.id);
      state.data = newData;
    },
  },
});

export const { ADDHISTORY, DELETEHISTORYBYID } = bookingHistorySlice.actions;

export default bookingHistorySlice.reducer;
