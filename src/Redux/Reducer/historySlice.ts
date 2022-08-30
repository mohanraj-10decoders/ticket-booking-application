import { createSlice } from '@reduxjs/toolkit';
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

const historyInitialState: BookingHistoryType = {
  data: [
    {
      id: 0,
      boarding: 'Test',
      destination: '',
      date: null,
      travelClass: '',
      travellers: '',
      price: '',
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
      let newData = [
        ...state.data,
        { id: new Date().getTime(), ...payload.value },
      ];
      state.data = newData;
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
