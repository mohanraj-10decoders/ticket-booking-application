import React from 'react';
import Carousel from '../HomeContent/Carousel';
import DisplayCard from '../HomeContent/DisplayCard';
import HotelDestinations from './HotelDestinations';
import classes from './Hotels.module.css';

export default function Hotels() {
  return (
    <div className={classes.container}>
      <section className={classes.content}>
        <h1>Book Domestic Hotels Online</h1>
        <div className={classes.headCard}></div>
      </section>
      <section className={classes.staticDisplay}>
        <Carousel />
        <DisplayCard />
      </section>
      <section className={classes.popularHotels}>
        <h4>Popular Indian Hotel Destinations</h4>
        <HotelDestinations />
      </section>
    </div>
  );
}
