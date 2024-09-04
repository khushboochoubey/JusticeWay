import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { toast } from 'react-toastify'; // Import toast for notifications
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS
import './Register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = async (e) => {
    e.preventDefault();
    const newUser = { name, email, password };

    try {
      // await axios.post('http://localhost:5002/api/auth/register', newUser);
      await axios.post(`${window.location.origin}/api/auth/register`, newUser);
      toast.success('Registration successful! Redirecting to login...');
      setTimeout(() => {
        navigate('/login'); // Redirect to login page after successful registration
      }, 2000); // Redirect after 2 seconds
    } catch (err) {
      toast.error(err.response.data.msg || 'Registration failed');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>Register</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;

