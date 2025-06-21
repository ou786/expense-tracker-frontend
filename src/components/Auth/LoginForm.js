import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // 👈 Add this

function LoginForm({ setToken }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate(); // 👈 Hook for redirecting

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://expense-tracker-backend-e5dw.onrender.com/login', formData);
      localStorage.setItem('token', res.data.token);
      setToken(res.data.token);           // ✅ Update state
      navigate('/dashboard');             // ✅ Redirect after login
      alert("Login successful!");
    } catch (err) {
      alert("Login failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
