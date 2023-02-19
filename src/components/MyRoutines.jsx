import React, { useState, useEffect } from 'react';

const MyRoutines = (props) => {
    const [routines, setRoutines] = useState([]);
    const token = props.token;
    const user = props.username;

    useEffect(() => {
        async function fetchUserRoutines() {
            try {
                const response = await fetch(`http://fitnesstrac-kr.herokuapp.com/api/users/${user}/routines`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                })

                const result = await response.json();
                setRoutines(result);
            } catch (error) {
                console.error(error);
            }
        }
        fetchUserRoutines();
    }, [token, user])

    useEffect(() => {}, [])


  return (
    <div className='user-page'>
    <h2>Your Routines</h2>
    <ul className='user-routines-list'>
      {routines.map(routine => {
        return (
          <li className='routine' key={routine.id}>
            <p>
              {routine.name}
            </p>
            <p>
              {routine.goal}
            </p>
            <ul>
              {routine.activities.map (activities => {
                return (
                  <li key={activities.id}>
                    <p>
                      {activities.name}
                    </p>
                    <p>
                      {activities.description}
                    </p>
                    <p>
                      {activities.duration}
                    </p>
                    <p>
                      {activities.count}
                    </p>
                  </li>
                )
              })}
            </ul>
          </li>
        )
      })}
    </ul>
  </div>
  )
}

export default MyRoutines;
