import React, { useEffect, useState } from 'react';
import classes from './BookingCard.module.css';
import SingleSelect from './DropDownComponent';
import DatePickerComponent from './DatePicker';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import Modal from 'react-modal';
import ConfirmBooking from './ConfirmBooking';

type optionType = Object & {
  value: string;
  label: string;
};

interface propType {
  options: {
    keyString: string;
    data: optionType[];
  };
}

export default function BookingCard() {
  const [modal, setModal] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  };
  const booking = useSelector(
    (state: RootState) => state.CurrentBookingReducer
  );
  let { boarding, destination, date, travelClass, travellers } = booking;
  let buttonEnabled: boolean = !!(
    boarding &&
    destination &&
    date &&
    travelClass &&
    travellers
  );
  useEffect(() => {
    console.log('Testing button', booking, buttonEnabled);
  }, [booking, buttonEnabled]);
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [modal]);

  const boardingOptions: propType = {
    options: {
      keyString: 'boarding',
      data: [
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Paris', value: 'Paris' },
        { label: 'Kolkata', value: 'Kolkata' },
        { label: 'London', value: 'London' },
      ],
    },
  };
  const destinationOptions: propType = {
    options: {
      keyString: 'destination',
      data: [
        { label: 'Chennai', value: 'Chennai' },
        { label: 'Delhi', value: 'Delhi' },
        { label: 'Berlin', value: 'Berlin' },
        { label: 'Paris', value: 'Paris' },
        { label: 'Kolkata', value: 'Kolkata' },
        { label: 'London', value: 'London' },
      ],
    },
  };
  const travelClassOptions: propType = {
    options: {
      keyString: 'travelClass',
      data: [
        { label: 'Economy', value: 'Economy' },
        { label: 'Business', value: 'Business' },
        { label: 'Premium', value: 'Premium' },
        { label: 'First', value: 'First' },
      ],
    },
  };
  const noOfTravellersOptions: propType = {
    options: {
      keyString: 'travellers',
      data: [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
      ],
    },
  };
  return (
    <section className={classes.sectionContainer}>
      <div className={classes.content}>
        {/* <h4>Booking Card</h4> */}
        <div className={classes.dropdownContainer}>
          <div className={classes.dropDownDiv}>
            <h5>From</h5>
            <SingleSelect {...boardingOptions.options} />
          </div>
          <div className={classes.dropDownDiv}>
            <h5>To</h5>
            <SingleSelect {...destinationOptions.options} />
          </div>
          <div className={classes.datePickerDiv}>
            <h5>Journey Date</h5>
            <DatePickerComponent />
          </div>
          <div className={classes.dropDownDiv}>
            <h5>No of Travellers</h5>
            <SingleSelect {...noOfTravellersOptions.options} />
          </div>
          <div className={classes.dropDownDiv}>
            <h5>Class</h5>
            <SingleSelect {...travelClassOptions.options} />
          </div>
        </div>
        <button
          className={classes.applyButton}
          disabled={!buttonEnabled}
          onClick={handleModal}
        >
          Proceed to Booking
        </button>
      </div>
      <Modal
        isOpen={modal}
        onRequestClose={handleModal}
        style={{
          overlay: {
            position: 'fixed',
            top: 100,
            left: 200,
            right: 200,
            bottom: 50,
            borderRadius: '10px',
            zIndex: '2',
            minWidth: '500px',
            // backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
          content: {
            position: 'absolute',
            top: '0px',
            left: '0px',
            right: '0px',
            bottom: '0px',
            background: '#fff',
            overflow: 'hidden',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '10px',
            outline: 'none',
            padding: '20px 100px',
          },
        }}
      >
        {/* <button onClick={handleModal}>x</button> */}
        <h4 className={classes.modalTitle}>Your booking details</h4>
        <ConfirmBooking />
        <div className={classes.buttons}>
          <button onClick={handleModal} className={classes.bookingButton}>
            Book now
          </button>
          <button onClick={handleModal} className={classes.cancelButton}>
            Cancel
          </button>
        </div>
      </Modal>
    </section>
  );
}
