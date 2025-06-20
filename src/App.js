import React, { useState } from 'react';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Analytics from './components/Analytics'; // 👈 import this

function App() {
  const [editExpense, setEditExpense] = useState();

  const [expenses, setExpenses] = useState([]);

  return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <ExpenseForm editExpense={editExpense} setEditExpense={setEditExpense} setExpenses={setExpenses} />


<ExpenseList
  expenses={expenses}
  setExpenses={setExpenses}
  setEditExpense={setEditExpense}
/>

      <Analytics /> {/* 👈 Add this here */}
    </div>
  );
}

export default App;
