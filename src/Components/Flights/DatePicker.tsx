import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch } from 'react-redux';
import { ADDBOOKING } from '../../Redux/Reducer';
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const DatePickerComponent = () => {
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ADDBOOKING({ value: startDate.toString(), keyString: 'date' }));
  }, [startDate, dispatch]);
  return (
    <DatePicker
      selected={startDate}
      minDate={new Date()}
      onChange={(date: Date) => setStartDate(date)}
      style={{ padding: '0px' }}
    />
  );
};

export default DatePickerComponent;
