import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Main.module.css';

export default function Main() {
  return (
    <div>
      <header className={classes.header}>
        <Header />
      </header>
      <main className={classes.main}>This is my main component</main>
      <footer>
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
            style={{ display: 'flex', justifyContent: 'flex-end', gap: '30px' }}
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
  return <>This is my footer</>;
}
