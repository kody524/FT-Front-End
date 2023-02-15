import React from 'react';

const Navibar = () => {
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
        </ul>
      </nav>
    </div>
  );
};

export default Navibar;
