import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(''); // Fixed: initialize as empty string
    const [loading, setLoading] = useState(false); // Added: loading state

    const handleChange = (e) => {   
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(''); // Clear previous success message
        
        if (!formData.email || !formData.password) {  
            setError('Please fill in all fields');
            return;
        }


        setLoading(true);

        try {
            const response = await fetch('https://loanaptech-1-d3yj.onrender.com/api/auth/login', {
                method: 'POST',
                headers: {
                    
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (response.ok) {
                setSuccess('Login successful! Redirecting...');
                setTimeout(() => {
                    navigate('/dashboard'); // Redirect to dashboard after successful login
                }, 3000);
            } else {
                setError(data.message || 'Login failed');

            }
            localStorage.setItem('user', JSON.stringify(data.user));   
        } catch (error) {
            setError('An error occurred during login');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="auth-container">
            <h2>Login to Your Account</h2>
            {error && <p className="error">{error}</p>}
            {success && <p className="success">{success}</p>}
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
               
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
               
                <button type="submit" disabled={loading}>
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;