import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from './Auth/LoginForm';

function Home({ setToken }) {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <h2>Welcome to Expense Tracker</h2>
      <p>Please login to continue</p>

      <LoginForm setToken={setToken} /> {/* 👈 Embedded Login */}

      <p style={{ marginTop: '20px' }}>
        Not a user yet?
        <br />
        <Link to="/register">
          <button style={{ marginTop: '10px' }}>Register</button>
        </Link>
      </p>
    </div>
  );
}

export default Home;
