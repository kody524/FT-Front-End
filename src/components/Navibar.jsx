import React, { useState, useEffect } from 'react';

const Navibar = () => {
  const [token, setToken] = useState('');
  
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
  }, [])

  if (token) {
    return (
      <div>
      <nav>
        <h2 className='title'>FITNESS TRACKR</h2>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/routines'>Routines</a>
          </li>
          <li>
            <a href='/activities'>Activities</a>
          </li>
          <li>
            <a href='/myroutines'>My Routines</a>
          </li>
          <li>
            <a href='/addroutine'>Add Routine</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='/signup'>SIGNUP</a>
          </li>
          <li>
            <a href='/login'>LOGIN</a>
          </li>
        </ul>
      </nav>
    </div>
    )
  } else if (!token) {
  return (
    <div>
      <nav>
        <h2 className='title'>FITNESS TRACKR</h2>
        <ul>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='/routines'>Routines</a>
          </li>
          <li>
            <a href='/activities'>Activities</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href='/signup'>SIGNUP</a>
          </li>
          <li>
            <a href='/login'>LOGIN</a>
          </li>
        </ul>
      </nav>
    </div>
  )};
};

export default Navibar;
