import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navibar from './components/Navibar';
import Home from './components/Home.jsx';
import Signup from './components/Signup.jsx';
import Routines from './components/Routines.jsx';
import Activities from './components/Activities.jsx'
import Login from './components/Login.jsx';
import MyRoutines from './components/MyRoutines.jsx';
import AddRoutine from './components/AddRoutine.jsx';

function App() {
  const [username, setUsername] = useState('');
  
  return (
    <div className='App'>
      <Navibar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='routines' element={<Routines />} />
        <Route path='activities' element={<Activities />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='users/me' element={<MyRoutines username={username} />} />
        <Route path='addroutine' element={<AddRoutine />} />
      </Routes>
    </div>
  );
}

export default App;
