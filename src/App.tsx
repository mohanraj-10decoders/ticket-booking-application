import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import { Suspense, lazy } from 'react';
import Main from './Components/main/Main';
import Register from './Components/Register/Register';
import SignIn from './Components/signIn/SignIn';
import './App.css';
import CSS from 'csstype';
import HomeContent from './Components/HomeContent/HomeContent';

const Flights = lazy(() => import('./Components/Flights/Flights'));
const Hotels = lazy(() => import('./Components/Hotels/Hotels'));

const styles: CSS.Properties = {
  color: 'red',
  fontSize: '2rem',
  width: '100%',
  height: '100vh',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

function App() {
  return (
    <div className='App'>
      <Suspense
        fallback={
          <div className='loader' style={styles}>
            Loading.....
          </div>
        }
      >
        <Router>
          <Routes>
            <Route path='/' element={<NavLink to='/signIn'>SignIn</NavLink>} />
            <Route path='/dashboard' element={<Main />}>
              <Route path='' element={<HomeContent />} />
              <Route path='home' element={<HomeContent />} />
              <Route path='flights' element={<Flights />} />
              <Route path='hotels' element={<Hotels />} />
              <Route path='offers' element={<HomeContent />} />
              <Route path='contact' element={<HomeContent />} />
            </Route>
            <Route path='/register' element={<Register />}></Route>
            <Route path='/signIn' element={<SignIn />}></Route>
          </Routes>
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
