import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Analytics from './components/Analytics'; // 👈 import this

function App() {
  const [editExpense, setEditExpense] = useState(null);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm editExpense={editExpense} setEditExpense={setEditExpense} />
      <ExpenseList setEditExpense={setEditExpense} />
      <Analytics /> {/* 👈 Add this here */}
    </div>
  );
}

export default App;
