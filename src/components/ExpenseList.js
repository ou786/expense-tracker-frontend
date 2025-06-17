import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ExpenseList({setEditExpense}) {
  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = () => {
    axios.get('http://localhost:4000/expenses')
      .then((res) => setExpenses(res.data))
      .catch((err) => console.error('Error fetching expenses:', err));
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/expenses/${id}`);
      fetchExpenses(); // Refresh list after deletion
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
