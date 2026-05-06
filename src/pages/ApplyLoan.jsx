import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./ApplyLoan.css";
const LoanApplication = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    loanAmount: '',
    loanTenure: '',
    purposeOfLoan: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application Submitted:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h1 className="apply-title">Apply for Loan</h1>
        
        <form className="apply-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Loan Amount ($)</label>
            <input
              type="number"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Loan Tenure</label>
            <select
              name="loanTenure"
              value={formData.loanTenure}
              onChange={handleChange}
              required
            >
              <option value="">Select tenure</option>
              <option value="12">12 months</option>
              <option value="24">24 months</option>
              <option value="36">36 months</option>
              <option value="48">48 months</option>
              <option value="60">60 months</option>
            </select>
          </div>

          <div className="input-group">
            <label>Purpose of Loan</label>
            <textarea
              name="purposeOfLoan"
              value={formData.purposeOfLoan}
              onChange={handleChange}
              placeholder="e.g., Home renovation, Business expansion, Education..."
            />
          </div>

          <button type="submit" className="apply-submit-btn">
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoanApplication;