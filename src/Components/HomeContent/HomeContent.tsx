import React from 'react';
import Flights from '../Flights/Flights';
import Carousel from './Carousel';
import classes from './HomeContent.module.css';

export default function HomeContent() {
  return (
    <div className={classes.HomeContent}>
      <div className={classes.title}>
        <h2>Book Hotels & Flights Online</h2>
      </div>
      <Carousel />
      <Flights />
    </div>
  );
}
