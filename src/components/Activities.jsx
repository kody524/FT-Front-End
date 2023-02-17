import React, { useState, useEffect } from 'react';

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/activities', {
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => response.json())
      .then(result => {
        setActivities(result);
        //console.log(result);
      })
      .catch(console.error);
  }, [])

  return (
    <div className='activities-page'>
      <h2>Activities</h2>
      <ul className='public-activities-list'>
        {activities.map(activity => {
          return (
            <li className='activity' key={activity.id}>
              <p>
                {activity.name}
              </p>
              <p>
                {activity.description}
              </p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Activities;
