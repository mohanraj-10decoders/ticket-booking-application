import React from 'react';
import classes from './BookingCard.module.css';
import SingleSelect from './DropDownComponent';
import DatePickerComponent from './DatePicker';

export default function BookingCard() {
  const destinations = {
    data: [
      { label: 'Chennai', value: 'Chennai' },
      { label: 'Delhi', value: 'Delhi' },
      { label: 'Berlin', value: 'Berlin' },
      { label: 'Paris', value: 'Paris' },
      { label: 'Kolkata', value: 'Kolkata' },
      { label: 'London', value: 'London' },
    ],
  };
  const travelClass = {
    data: [
      { label: 'Economy', value: 'Economy' },
      { label: 'Business', value: 'Business' },
      { label: 'Premium', value: 'Premium' },
      { label: 'First', value: 'First' },
    ],
  };
  return (
    <section className={classes.sectionContainer}>
      <div className={classes.content}>
        {/* <h4>Booking Card</h4> */}
        <div className={classes.dropdownContainer}>
          <div className={classes.dropDownDiv}>
            <h5>From</h5>
            <SingleSelect {...destinations} />
          </div>
          <div className={classes.dropDownDiv}>
            <h5>To</h5>
            <SingleSelect {...destinations} />
          </div>
          <div className={classes.datePickerDiv}>
            <h5>Journey Date</h5>
            <DatePickerComponent />
          </div>
          <div className={classes.dropDownDiv}>
            <h5>No of Travellers</h5>
            <SingleSelect {...destinations} />
          </div>
          <div className={classes.dropDownDiv}>
            <h5>Class</h5>
            <SingleSelect {...travelClass} />
          </div>
        </div>
        <button className={classes.applyButton}>Apply</button>
      </div>
    </section>
  );
}
