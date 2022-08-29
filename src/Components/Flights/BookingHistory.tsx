import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DELETEHISTORYBYID } from '../../Redux/Reducer/historySlice';
import { RootState } from '../../Redux/Store';
import DeleteIcon from '@mui/icons-material/Delete';
import classes from './BookingHistory.module.css';
import Modal from 'react-modal';

export default function BookingHistory() {
  const bookingHistory = useSelector(
    (state: RootState) => state.BookingHistoryReducer
  );
  const dispatch = useDispatch();
  console.log('Booking history', bookingHistory.data);
  const [modal, setModal] = useState(false);
  const [id, setId]: [number | undefined, Function] = useState();
  const handleModal = () => {
    setModal(!modal);
  };
  const handleDelete = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number | undefined
  ) => {
    setId(id);
    setModal(true);
    // dispatch(DELETEHISTORYBYID({ id: id }));
  };
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'scroll';
    }
  }, [modal]);
  return (
    <section className={classes.tableContainer}>
      {modal && (
        <Modal
          isOpen={modal}
          onRequestClose={handleModal}
          appElement={document.getElementById('root') as HTMLElement}
          style={{
            overlay: {
              position: 'fixed',
              top: 200,
              left: '25vw',
              right: '25vw',
              bottom: '25vh',
              borderRadius: '10px',
              zIndex: '2',
              width: 'max-content',
              height: 'max-content',
              // backgroundColor: 'rgba(255, 255, 255, 0.75)',
            },
            content: {
              position: 'absolute',
              width: 'max-content',
              height: 'max-content',
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
          <h4 className={classes.modalTitle}>
            Are you sure to cancel the booking?
          </h4>
          <div className={classes.modalButtonConatiner}>
            <button
              className={classes.yesOrNo}
              onClick={() => {
                dispatch(DELETEHISTORYBYID({ id: id }));
                setModal(false);
              }}
            >
              Yes
            </button>
            <button
              className={classes.yesOrNo}
              onClick={() => {
                setModal(false);
              }}
            >
              No
            </button>
          </div>
        </Modal>
      )}
      <table className={classes.table}>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>Boarding</th>
          <th>Destination</th>
          <th>No of Travellers</th>
          <th>Class</th>
          <th>Date</th>
          <th>Price</th>
          <th></th>
        </tr>
        {bookingHistory.data.map((booking, index) => {
          let date: string | null = booking.date
            ? new Date(Date.parse(booking.date))
                .toString()
                .split(' ')
                .splice(1, 3)
                .join(' ')
            : null;
          if (index !== 0)
            return (
              <tr key={index}>
                <td>{index}</td>
                <td>{booking.id}</td>
                <td>{booking.boarding}</td>
                <td>{booking.destination}</td>
                <td>{booking.travellers}</td>
                <td>{booking.travelClass}</td>
                <td>{date}</td>
                <td>{booking.price}</td>
                <td>
                  <button
                    className={classes.deleteButton}
                    onClick={(event) => handleDelete(event, booking.id)}
                  >
                    {<DeleteIcon />}
                  </button>
                </td>
              </tr>
            );
          else return null;
        })}
      </table>
      {bookingHistory.data.length < 2 && (
        <div className={classes.noHistoryMsg}>No booking history available</div>
      )}
    </section>
  );
}
