import React, { useState, useEffect } from 'react';

const MyRoutines = (props) => {
  const [myRoutines, setMyRoutines] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));
  const user = props.username;

  useEffect(() => {
    async function fetchMyRoutines() {
      try {
        const response = await fetch(
          `http://fitnesstrac-kr.herokuapp.com/api/users/${user}/routines`,
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const result = await response.json();
        setMyRoutines(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMyRoutines();
  }, [user, token]);

  return (
    <div className='user-page'>
      <h2>Your Routines</h2>
      {/* <ul className='user-routines-list'>
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
      </ul> */}
    </div>
  );
};

export default MyRoutines;
