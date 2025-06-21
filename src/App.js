import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Analytics from './components/Analytics';
import LoginForm from './components/Auth/LoginForm';
import RegisterForm from './components/Auth/RegisterForm';
import Navbar from './components/Navbar';
import Home from './components/Home';


import './App.css';

function App() {
  const [editExpense, setEditExpense] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <div className="container">
        <h1>Expense Tracker</h1>

        <Routes>
  <Route path="/" element={<Home setToken={setToken} />} />
  <Route path="/register" element={<RegisterForm />} />
  <Route
    path="/dashboard"
    element={
      token ? (
        <>
          <Navbar setToken={setToken} />
          <ExpenseForm
            editExpense={editExpense}
            setEditExpense={setEditExpense}
            setExpenses={setExpenses}
          />
          <ExpenseList
            expenses={expenses}
            setExpenses={setExpenses}
            setEditExpense={setEditExpense}
          />
          <Analytics />
        </>
      ) : (
        <Navigate to="/" />
      )
    }
  />
</Routes>

      </div>
    </Router>
  );
}

export default App;
