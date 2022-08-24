import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from 'react-router-dom';
import Main from './Components/main/Main';
import Register from './Components/Register/Register';
import SignIn from './Components/signIn/SignIn';
import './App.css';
import HomeContent from './Components/HomeContent/HomeContent';
import Flights from './Components/Flights/Flights';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<NavLink to='/signIn'>SignIn</NavLink>} />
          <Route path='/dashboard' element={<Main />}>
            <Route path='home' element={<HomeContent />} />
            <Route path='flights' element={<Flights />} />
            <Route path='hotels' element={<HomeContent />} />
            <Route path='offers' element={<HomeContent />} />
            <Route path='contact' element={<HomeContent />} />
          </Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
