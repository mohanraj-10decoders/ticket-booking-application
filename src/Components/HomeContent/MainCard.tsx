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
              <p className={classes.cardDate}>{`${data.day}, ${data.date}`}</p>
              <div className={classes.cities}>
                <p className={classes.cardFrom}>{data.from}</p>
                <p className={classes.cardTo}>{data.to}</p>
              </div>
              <p className={classes.cardDate}>Starting from</p>
              <h3 className={classes.cardPrice}>{data.price}</h3>
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
