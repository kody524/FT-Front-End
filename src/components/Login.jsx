import React, { useState, useEffect } from 'react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
    }
    setUsername('');
    setPassword('');
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://fitnesstrac-kr.herokuapp.com/api/users/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: `${username}`,
            password: `${password}`,
          }),
        }
      );

      const user = await response.json();
      console.log(user);
      setToken(user.token);
      localStorage.setItem('token', user.token);
    } catch (error) {
      console.error(error);
    }
  };
  if (!token) {
    return (
      <div className='login-page'>
        <h2>Welcome back!</h2>
        <form onSubmit={handleSubmit} className='login-form'>
          <fieldset className='login-fieldset'>
            <legend>Login</legend>
            <input
              required='required'
              value={username}
              type='text'
              placeholder='Username'
              onChange={(e) => setUsername(e.target.value)}
            />
            &nbsp;
            <input
              required='required'
              value={password}
              type='password'
              placeholder='Password'
              onChange={(e) => setPassword(e.target.value)}
            />
            &nbsp;
            <button type='submit'>Log In</button>
          </fieldset>
        </form>
      </div>
    );
  } else if (token) {
    return <h2>You're in, enjoy!</h2>;
  }
};

export default Login;
