import React, { useState, useEffect } from 'react';

const Routines = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/routines', {
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((result) => {
        setRoutines(result);
        //console.log(result);
      })
      .catch(console.error);
  }, []);

  return (
    <div className='routines-page'>
      <h2>All Members' Routines</h2>
      <ul className='public-routines-list'>
        {routines.map((routine) => {
          return (
            <li className='routine' key={routine.id}>
              <p>{routine.name}</p>
              <p>{routine.goal}</p>
              <p>{routine.creatorName}</p>
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

export default Routines;
