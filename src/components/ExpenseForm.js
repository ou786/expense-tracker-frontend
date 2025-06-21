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

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    }
  };

  try {
    if (editExpense) {
      // PUT request
      await axios.put(
        `https://expense-tracker-backend-e5dw.onrender.com/expenses/${editExpense.id}`,
        formData,
        config
      );
      alert("Expense updated!");
      setEditExpense(null);
    } else {
      // POST request
      const res = await axios.post(
        'https://expense-tracker-backend-e5dw.onrender.com/expenses',
        formData,
        config
      );
      setExpenses(prev => [...prev, res.data]);
      alert("Expense added!");
    }

    // Reset form
    setFormData({
      user_id: '',
      amount: '',
      category: '',
      description: '',
      date: ''
    });

  } catch (err) {
    console.error(err);
    alert("Error: " + err.response?.data?.message || "Something went wrong");
  }
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
