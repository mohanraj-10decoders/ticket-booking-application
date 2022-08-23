import React from 'react';
import Carousel from '../HomeContent/Carousel';
import DisplayCard from '../HomeContent/DisplayCard';
import { FlightsCard } from '../HomeContent/MainCard';
import classes from './Flights.module.css';

export default function Flights() {
  return (
    <div className={classes.content}>
      <h3 className={classes.h3}>
        Book Domestic & International Flight Online
      </h3>
      <section className={classes.bottomSection}>
        <div className={classes.carDisplayCard}>
          <Carousel />
          <DisplayCard />
        </div>
        <div className={classes.flightsCardContainer}>
          <FlightsCard />
        </div>
      </section>
    </div>
  );
}
