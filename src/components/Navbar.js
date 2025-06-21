import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar({ setToken }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null); // clears state
    navigate('/login'); // redirect
  };

  return (
    <nav style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
      <button onClick={handleLogout} style={{ background: '#dc3545', color: 'white' }}>
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
