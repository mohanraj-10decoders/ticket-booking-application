import React from 'react';
import classes from './HotelDestination.module.css';
//https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-delhi.jpg
const destinations = [
  {
    city: 'Delhi',
    image:
      'https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-delhi.jpg',
  },
  {
    city: 'Mumbai',
    image:
      'https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-mumbai.jpg',
  },
  {
    city: 'Bangalore',
    image:
      'https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-bangalore.jpg',
  },
  {
    city: 'Chennai',
    image:
      'https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-chennai.jpg',
  },
  {
    city: 'Kolkata',
    image:
      'https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-kolkata.jpg',
  },
  {
    city: 'Hyderabad',
    image:
      'https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-hyderabad.jpg',
  },
  {
    city: 'Goa',
    image: 'https://hotelstatic.happyeasygo.com/ForFront/pc/hotels-in-goa.jpg',
  },
];
export default function HotelDestinations() {
  return (
    <div className={classes.container}>
      {destinations.map((dest, index) => {
        return (
          <div className={classes.imgContainer} key={index}>
            <img src={dest.image} alt={dest.city} />
            <h5 className={classes.cityName}>{dest.city}</h5>
          </div>
        );
      })}
    </div>
  );
}
