import React, { useState, useEffect } from 'react';

const AddRoutine = () => {
  const [routine, setRoutine] = useState({});
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [isPublic, setIsPublic] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://fitnesstrac-kr.herokuapp.com/api/routines',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            name,
            goal,
            isPublic,
          }),
        }
      );
      const result = await response.json();
      setRoutine(result);
      console.log(result)
    } catch (error) {
      console.error(error);
    }
    setName('');
    setGoal('');
    setIsPublic(false);
  };

  return (
    <div>
      <h2>Create A Routine</h2>
      <form onSubmit={handleSubmit} className='routine-form'>
        <fieldset className='routine-fieldset'>
          <legend>Add a new routine</legend>
          <input
            value={name}
            type='text'
            placeholder='Routine Name'
            onChange={(e) => setName(e.target.value)}
          />
          &nbsp;
          <input
            value={goal}
            type='text'
            placeholder='Your Goal'
            onChange={(e) => setGoal(e.target.value)}
          />
          &nbsp;
          <label>Check box to make routine public: </label>
          <input
            value={isPublic}
            type='checkbox'
            onChange={(e) => setIsPublic(e.target.value)}
          />
          &nbsp;
          <button type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default AddRoutine;
