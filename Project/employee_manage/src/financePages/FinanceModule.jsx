// FinanceModule.jsx
import React, { useState, useEffect } from "react";

const initialExpenses = [
  { id: 1, category: "Recruitment", amount: 12000, date: "2025-04-15" },
  { id: 2, category: "Training", amount: 8500, date: "2025-04-20" },
  { id: 3, category: "Software Licenses", amount: 3000, date: "2025-04-21" },
];

const FinanceModule = () => {
  const [expenses, setExpenses] = useState(initialExpenses);
  const [form, setForm] = useState({ category: "", amount: "", date: "" });
  const [totals, setTotals] = useState({ total: 0, byCategory: {} });

  useEffect(() => {
    const total = expenses.reduce((sum, e) => sum + Number(e.amount), 0);
    const byCategory = {};
    expenses.forEach((e) => {
      if (!byCategory[e.category]) byCategory[e.category] = 0;
      byCategory[e.category] += Number(e.amount);
    });
    setTotals({ total, byCategory });
  }, [expenses]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!form.category || !form.amount || !form.date) return;
    const newExpense = { ...form, id: Date.now(), amount: Number(form.amount) };
    setExpenses([...expenses, newExpense]);
    setForm({ category: "", amount: "", date: "" });
  };

  return (
    <div style={{ padding: "80px 20px" }}>
      <h2 style={{ fontSize: "26px", marginBottom: "20px" }}>Finance & Expense Tracking</h2>

      {/* Add Expense Form */}
      <form onSubmit={handleAddExpense} style={formStyle}>
        <input
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="amount"
          type="number"
          placeholder="Amount"
          value={form.amount}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <input
          name="date"
          type="date"
          value={form.date}
          onChange={handleChange}
          required
          style={inputStyle}
        />
        <button type="submit" style={buttonStyle}>Add Expense</button>
      </form>

      {/* Summary Panel */}
      <div style={summaryPanel}>
        <h3>Total Expenses: ₹{totals.total.toLocaleString()}</h3>
        <ul>
          {Object.entries(totals.byCategory).map(([cat, amt]) => (
            <li key={cat}>{cat}: ₹{amt.toLocaleString()}</li>
          ))}
        </ul>
      </div>

      {/* Expense Table */}
      <table style={tableStyle}>
        <thead>
          <tr>
            <th>Category</th>
            <th>Amount (₹)</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((exp) => (
            <tr key={exp.id}>
              <td>{exp.category}</td>
              <td>{exp.amount.toLocaleString()}</td>
              <td>{exp.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const formStyle = {
  marginBottom: "30px",
  display: "flex",
  gap: "10px",
  flexWrap: "wrap",
};

const inputStyle = {
  padding: "10px",
  fontSize: "14px",
  borderRadius: "4px",
  border: "1px solid #ccc",
  minWidth: "180px",
};

const buttonStyle = {
  padding: "10px 16px",
  backgroundColor: "#4caf50",
  color: "#fff",
  border: "none",
  borderRadius: "4px",
  cursor: "pointer",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  marginTop: "20px",
};

const summaryPanel = {
  background: "#f1f1f1",
  padding: "20px",
  borderRadius: "6px",
  marginBottom: "20px",
};

export default FinanceModule;
