import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // State to hold error message
  const { loginUser } = useUser();  // Access loginUser from UserContext
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state before making a request

    try {
      // const response = await axios.post('http://localhost:5002/api/auth/login', { email: username, password });
      const response = await axios.post(`${window.location.origin}/api/auth/login`, { email: username, password });
      const { token, user } = response.data;

      // Store user and token in context and localStorage
      loginUser({ ...user, token });

      // Navigate to home or protected route
      navigate('/');
    } catch (err) {
      console.error(err.response?.data?.msg || 'Login failed');
      setError(err.response?.data?.msg || 'Login failed'); // Set error message
      toast.error(err.response?.data?.msg || 'Login failed');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && <div className="error-message">{error}</div>} {/* Display error message */}
      </form>
    </div>
  );
};

export default Login;
