import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import customAxios from '../../Axios';
import TravelBlogsData from '../../MockData/travelBlogsCard.json';
import {
  FlightsCardType,
  TravelBlogsCardType,
} from '../../MockDataTypes/Types';
import { Row, Col, Container } from 'react-bootstrap';
import classes from './MainCard.module.css';

export default function MainCard() {
  const [selected, setSelected] = useState('Hotels');
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

export function FlightsCard() {
  const [FlightsData, setFlightsData] = useState({ data: [] });

  useEffect(() => {
    customAxios
      .get('auth/getData')
      .then((resp) => setFlightsData(resp.data.data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div className={classes.flightsCards}>
      <h3>Best Flight Deals</h3>
      <Container>
        <Row className={classes.flightCards}>
          {FlightsData?.data.map((data: FlightsCardType) => {
            return (
              <Col
                key={data.id}
                className={classes.flightCard}
                style={{ minWidth: '150px' }}
              >
                <p
                  className={classes.cardDate}
                >{`${data.day}, ${data.date}`}</p>
                <div className={classes.cities}>
                  <p className={classes.cardFrom}>{data.from}</p>
                  <p className={classes.cardTo}>{data.to}</p>
                </div>
                <p className={classes.cardDate}>Starting from</p>
                <h3 className={classes.cardPrice}>{data.price}</h3>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

function HotelsCard() {
  return (
    <div className={classes.flightsCards}>
      <h3>Travel Blog</h3>
      <section className={classes.flightCards}>
        {TravelBlogsData.data.map((data: TravelBlogsCardType) => {
          return (
            <div className={classes.travelCard} key={data.id}>
              <img
                className={classes.travelCardImage}
                src={data.imageUrl}
                alt='BlogImage'
              />
              <p>{data.title}</p>
            </div>
          );
        })}
      </section>
    </div>
  );
}
