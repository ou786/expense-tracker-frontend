import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('https://expense-tracker-backend-e5dw.onrender.com/register', formData);
      alert("Registration successful!");
    } catch (err) {
      alert("Registration failed");
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
      <input name="password" type="password" placeholder="Password" required value={formData.password} onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
