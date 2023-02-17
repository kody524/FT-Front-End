import React, { useState, useEffect } from 'react';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    };
    setUsername('');
    setPassword('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://fitnesstrac-kr.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: username,
            password: password,
        }),
      });

      const user = await response.json();
      console.log(user)
      setToken(user.token);
      localStorage.setItem('token', user.token);
      localStorage.setItem('key', username);
    } catch (error) {
      console.error(error);
    }
  };

  if (!token) {
    return (
      <div>
        <h2 className=''>Not yet a member? Register here!</h2>
        <form onSubmit={handleSubmit} className=''>
          <fieldset className=''>
            <legend>Register</legend>
            <input
              value={username}
              type='text'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            &nbsp;
            <input
              value={password}
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            &nbsp;
            <button type=''>Sign Up</button>
          </fieldset>
        </form>
      </div>
    );
  } else if (token) {
    return (
      <div>
      <h1>Hello </h1>
      <h2>You have successfully joined!</h2>
      </div>
      )
  }
}

export default Signup;
