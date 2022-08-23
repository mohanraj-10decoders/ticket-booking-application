import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import products from '../../MockData/products.json';
import airlines from '../../MockData/airLines.json';
import corporates from '../../MockData/corporates.json';
import payments from '../../MockData/payments.json';
import { MockDataPath, MockDataUrl } from '../../MockDataTypes/Types';
import classes from './Main.module.css';
import HomeContent from '../HomeContent/HomeContent';

interface jsonData {
  data: MockDataPath[] | MockDataUrl[];
}

export default function Main() {
  useEffect(() => {
    console.log(products);
  }, []);
  return (
    <div>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>
        <Outlet />
      </main>
      <footer className={classes.footer}>
        <Footer />
      </footer>
    </div>
  );
}

function Header() {
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div
          className='container-fluid'
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          <NavLink to='/'>
            <img
              className={classes.logo}
              src='https://hotelstatic.happyeasygo.com/ForFront/pc/logo.png'
              alt='Logo'
            />
          </NavLink>
          <button
            type='button'
            className='navbar-toggler'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse1'
          >
            <span
              className='navbar-toggler-icon'
              style={{ color: 'blue' }}
            ></span>
          </button>
          <div
            className='collapse navbar-collapse'
            id='navbarCollapse1'
            // style={{ display: 'flex', justifyContent: 'flex-end', gap: '30px' }}
            style={{ justifyContent: 'flex-end' }}
          >
            <div
              className='navbar-nav'
              style={{
                display: 'flex',
                justifyContent: 'space-around',
                gap: '20px',
              }}
            >
              <div className='nav-item nav-link'>
                <NavLink to='/home' className={classes.navLink}>
                  Home
                </NavLink>
              </div>
              <div className='nav-item nav-link'>
                <NavLink to='/flights' className={classes.navLink}>
                  Flights
                </NavLink>
              </div>
              <div className='nav-item nav-link'>
                <NavLink to='/hotels' className={classes.navLink}>
                  Hotels
                </NavLink>
              </div>
              <div className='nav-item nav-link'>
                <NavLink to='/offers' className={classes.navLink}>
                  Offers
                </NavLink>
              </div>
              <div className='nav-item nav-link'>
                <NavLink to='/contact' className={classes.navLink}>
                  Contact
                </NavLink>
              </div>
              <div className='dropdown'>
                <button
                  type='button'
                  className='btn dropdown-toggle'
                  data-bs-toggle='dropdown'
                >
                  Manage Trip
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <a className='dropdown-item' href='#'>
                      My Trips
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Print Ticket
                    </a>
                  </li>
                  <li>
                    <a className='dropdown-item' href='#'>
                      Web check-in
                    </a>
                  </li>
                </ul>
              </div>
              <NavLink to='/signIn'>
                <div>
                  <button className='btn btn-light'>Sign-In</button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function Footer() {
  return (
    <>
      <section>
        <div>
          <h6 style={{ width: 'max-content' }}>OUR PRODUCTS</h6>
          <FooterList {...products} />
        </div>
        <div>
          <h6 style={{ width: 'max-content' }}>CORPORATE</h6>
          <FooterList {...corporates} />
        </div>
        <div>
          <h6 style={{ width: 'max-content' }}>AirLines</h6>
          <FooterList {...airlines} />
        </div>
        <div>
          <h6 style={{ width: 'max-content' }}>Payments</h6>
          <FooterList {...payments} />
        </div>
      </section>
      <div className={classes.copyRight}>
        <p>Copyright © 2016-2022 Happyeasygo Group. All rights reserved</p>
        <p>
          All brands, logos are trademarks or registered trademarks of their
          respective owners
        </p>
      </div>
    </>
  );
}

function FooterList({ data }: jsonData) {
  console.log('List data', data);
  // let newData = [...data];
  // console.log('List newdata', newData);
  return (
    <>
      <ul>
        {data.map((d: MockDataPath | MockDataUrl) => (
          <li key={d.id}>{d.name}</li>
        ))}
      </ul>
    </>
  );
}
