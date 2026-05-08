import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ApplyLoan.css";

const ApplyLoan = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    amount: "",
    tenure: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.amount || !formData.purpose || !formData.tenure) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("https://loanaptech-1-d3yj.onrender.com/api/loans/apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          amount: formData.amount,
          duration: formData.tenure,
          purpose: formData.purpose,
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Application failed");

      alert("Application Successful");
      navigate("/dashboard");  // or "/loans" as you prefer
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="apply-container">
      <div className="apply-card">
        <h1 className="apply-title">Apply For A Loan</h1>
        <form className="apply-form" onSubmit={handleSubmit}>
          {error && <p style={{ color: "red" }}>{error}</p>}
          
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Loan Amount ($)</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Loan Tenure (months)</label>
            <input type="number" name="tenure" value={formData.tenure} onChange={handleChange} required />
          </div>

          <div className="input-group">
            <label>Purpose Of Loan</label>
            <textarea name="purpose" value={formData.purpose} onChange={handleChange} required />
          </div>

          <button className="apply-submit-btn" disabled={loading}>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ApplyLoan;