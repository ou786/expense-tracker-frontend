import React, { useEffect } from 'react';
import axios from 'axios';

function ExpenseList({ expenses, setExpenses, setEditExpense }) {

  useEffect(() => {
  axios.get('https://expense-tracker-backend-e5dw.onrender.com/expenses')
    .then((res) => setExpenses(res.data))
    .catch((err) => console.error('Error fetching expenses:', err));
}, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://expense-tracker-backend-e5dw.onrender.com/expenses/${id}`);
      setExpenses(prev => prev.filter(exp => exp.id !== id)); // ✅ instantly update list
    } catch (err) {
      console.error('Error deleting expense:', err);
    }
  };

  return (
    <div>
      <h2>All Expenses</h2>
      <ul>
        {expenses.map((exp) => (
          <li key={exp.id}>
            <strong>{exp.category}</strong> - ₹{exp.amount} on {exp.date} <br />
            <em>{exp.description}</em>
            <br />
            <button onClick={() => setEditExpense(exp)}>Edit</button>
            <button onClick={() => handleDelete(exp.id)} style={{ marginLeft: '10px', background: 'red' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
