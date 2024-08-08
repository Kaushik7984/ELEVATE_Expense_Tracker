import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Register.css';
import toast from 'react-hot-toast';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    // Check if user already exists
    if (localStorage.getItem('username') === username) {
      setError('Username already exists');
      return;
    }

    // Save new user to local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    toast("Register Successfully")
    navigate('/login');
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        {error && <p className="error">{error}</p>}
        <div className="register-form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="register-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        <NavLink to='/login'>Login</NavLink>

      </form>
    </div>
  );
};

export default Register;
