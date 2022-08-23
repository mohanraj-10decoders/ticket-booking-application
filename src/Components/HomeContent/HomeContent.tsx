import React from 'react';
import Carousel from './Carousel';
import DisplayCard from './DisplayCard';
import About from './About';
import classes from './HomeContent.module.css';

export default function HomeContent() {
  return (
    <div className={classes.HomeContent}>
      <div className={classes.title}>
        <h2>Book Hotels & Flights Online</h2>
      </div>
      <Carousel />
      <section className={classes.bottomSection}>
        <DisplayCard />
        <About />
      </section>
    </div>
  );
}
