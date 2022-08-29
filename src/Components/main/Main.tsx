import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import products from '../../MockData/products.json';
import airlines from '../../MockData/airLines.json';
import corporates from '../../MockData/corporates.json';
import payments from '../../MockData/payments.json';
import { MockDataPath, MockDataUrl } from '../../MockDataTypes/Types';
import classes from './Main.module.css';

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
  const navigate = useNavigate();
  // const [path, setPath] = useState('');
  const logout = () => {
    localStorage.removeItem('userDetail');
    navigate('/');
  };
  const gotoRoute = (routeToPath: string) => {
    window.location.pathname = routeToPath;
  };
  return (
    <>
      <nav className='navbar navbar-expand-lg navbar-dark'>
        <div
          className='container-fluid'
          style={{ paddingTop: '10px', paddingBottom: '10px' }}
        >
          <NavLink to='/dashboard/home'>
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
                gap: '0px',
              }}
            >
              <div className='nav-item nav-link'>
                <NavLink
                  to='/dashboard/home'
                  className={({ isActive }) =>
                    isActive ? classes.activeNavLink : classes.navLink
                  }
                >
                  Home
                </NavLink>
              </div>
              <div className='nav-item nav-link'>
                <NavLink
                  to='/dashboard/flights'
                  className={({ isActive }) =>
                    isActive ? classes.activeNavLink : classes.navLink
                  }
                >
                  Flights
                </NavLink>
              </div>
              <div className='nav-item nav-link'>
                <NavLink
                  to='/dashboard/hotels'
                  className={({ isActive }) =>
                    isActive ? classes.activeNavLink : classes.navLink
                  }
                >
                  Hotels
                </NavLink>
              </div>
              {/* <div className='nav-item nav-link'>
                <NavLink
                  to='/dashboard/offers'
                  className={({ isActive }) =>
                    isActive ? classes.activeNavLink : classes.navLink
                  }
                >
                  Offers
                </NavLink>
              </div>
              <div className='nav-item nav-link'>
                <NavLink
                  to='/dashboard/contact'
                  className={({ isActive }) =>
                    isActive ? classes.activeNavLink : classes.navLink
                  }
                >
                  Contact
                </NavLink>
              </div> */}
              <div className='dropdown' style={{ width: '150px' }}>
                <button
                  type='button'
                  className='btn dropdown-toggle'
                  data-bs-toggle='dropdown'
                  style={{ color: 'white', boxShadow: 'none' }}
                >
                  {/* Manage Bookings */}
                </button>
                <ul className='dropdown-menu'>
                  <li>
                    <button
                      className={classes.dropDownItem}
                      onClick={() => {
                        gotoRoute('/dashboard/myBookings');
                      }}
                    >
                      My Bookings
                    </button>
                  </li>
                  <li>
                    <button
                      className={classes.dropDownItem}
                      onClick={() => {
                        gotoRoute('/dashboard/myBookings');
                      }}
                    >
                      Print Ticket
                    </button>
                  </li>
                  <li>
                    <button
                      className={classes.dropDownItem}
                      onClick={() => {
                        gotoRoute('/dashboard/myBookings');
                      }}
                    >
                      Web Check-In
                    </button>
                  </li>
                  <li>
                    <button className={classes.dropDownItem} onClick={logout}>
                      LogOut
                    </button>
                  </li>
                </ul>
              </div>
              {/* <div>
                <button className='btn btn-light' onClick={logout}>
                  LogOut
                </button>
              </div> */}
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
