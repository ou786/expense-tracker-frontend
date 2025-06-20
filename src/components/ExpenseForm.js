import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ExpenseForm({ editExpense, setEditExpense, setExpenses }) {

  const [formData, setFormData] = useState({
    user_id: '',
    amount: '',
    category: '',
    description: '',
    date: ''
  });

  useEffect(() => {
    if (editExpense) {
      setFormData(editExpense);
    }
  }, [editExpense]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editExpense) {
      // PUT request
      await axios.put(`https://expense-tracker-backend-e5dw.onrender.com/expenses/${editExpense.id}`, formData);
      alert("Expense updated!");
      setEditExpense(null);
    } else {
      // POST request
      await axios.post('https://expense-tracker-backend-e5dw.onrender.com/expenses', formData)
      .then((res) => {
    setExpenses(prev => [...prev, res.data]); // 👈 Add new expense to state
    alert("Expense added!");
  });
    }

    setFormData({
      user_id: '',
      amount: '',
      category: '',
      description: '',
      date: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {['user_id', 'amount', 'category', 'description', 'date'].map((field) => (
        <div key={field}>
          <input
            type={field === 'amount' ? 'number' : field === 'date' ? 'date' : 'text'}
            name={field}
            placeholder={field}
            value={formData[field]}
            onChange={handleChange}
            required
          />
        </div>
      ))}
      <button type="submit">{editExpense ? "Update Expense" : "Add Expense"}</button>
    </form>
  );
}

export default ExpenseForm;
