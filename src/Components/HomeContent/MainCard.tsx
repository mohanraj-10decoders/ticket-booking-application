import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FlightsData from '../../MockData/flightsCard.json';
import { FlightsCardType } from '../../MockDataTypes/Types';
import classes from './MainCard.module.css';

export default function MainCard() {
  const [selected, setSelected] = useState('Flights');
  return (
    <div className={classes.content}>
      <Button
        className={
          selected === 'Flights'
            ? classes.selectedButton
            : classes.unSelectedButton
        }
        variant={selected === 'Flights' ? 'light' : 'dark'}
        onClick={() => setSelected('Flights')}
      >
        Flights
      </Button>
      <Button
        className={
          selected === 'Hotels'
            ? classes.selectedButton
            : classes.unSelectedButton
        }
        variant={selected === 'Hotels' ? 'light' : 'dark'}
        onClick={() => setSelected('Hotels')}
      >
        Hotels
      </Button>
      <div className={classes.mainContent}>
        {selected === 'Flights' ? <FlightsCard /> : <HotelsCard />}
      </div>
    </div>
  );
}

function FlightsCard() {
  return (
    <div className={classes.flightsCards}>
      <h3>Best Flight Deals</h3>
      <section className={classes.flightCards}>
        {FlightsData.data.map((data: FlightsCardType, index: Number) => {
          return (
            <div className={classes.flightCard}>
              <p>{`${data.day}, ${data.date}`}</p>
              <div>
                <p>{data.from}</p>
                <p>{data.to}</p>
              </div>
              <p>Starting from</p>
              <h3>{data.price}</h3>
            </div>
          );
        })}
      </section>
    </div>
  );
}

function HotelsCard() {
  return (
    <div className={classes.flightsCard}>
      <h3>Travel Blog</h3>
    </div>
  );
}
