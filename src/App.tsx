import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Components/main/Main';
import Register from './Components/Register/Register';
import SignIn from './Components/signIn/SignIn';
import './App.css';
import HomeContent from './Components/HomeContent/HomeContent';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}>
            <Route path='/' element={<HomeContent />} />
          </Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/signIn' element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
