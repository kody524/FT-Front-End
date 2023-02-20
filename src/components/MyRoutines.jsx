import React, { useState, useEffect } from 'react';

const MyRoutines = (props) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const user = props.username;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, []);

  useEffect(() => {
    fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${user}/routines`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setMyRoutines(result);
        console.log(result);
      })
      .catch(console.error);
  }, [token, user]);

  return (
    <div className='user-page'>
      <h2>Your Routines</h2>
      <ul className='user-routines-list'>
        {myRoutines.map((routine) => {
          return (
            <li className='routine' key={routine.id}>
              <p>{routine.name}</p>
              <p>{routine.goal}</p>
              <ul>
                {routine.activities.map((activities) => {
                  return (
                    <li key={activities.id}>
                      <p>{activities.name}</p>
                      <p>{activities.description}</p>
                      <p>{activities.duration}</p>
                      <p>{activities.count}</p>
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyRoutines;
