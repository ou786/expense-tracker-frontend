// src/components/Analytics.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Analytics() {
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:4000/expenses/analytics')
      .then(res => setData(res.data))
      .catch(err => console.error('Error fetching analytics:', err));
  }, []);

  return (
    <div>
      <h2>Analytics</h2>
      <ul>
        {Object.entries(data).map(([category, total]) => (
          <li key={category}>
            <strong>{category}</strong>: ₹{total}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Analytics;
