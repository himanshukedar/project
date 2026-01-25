import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

export default function Signup() {
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        contact: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log("Signup Data:", formData);
            setLoading(false);
            navigate('/login');
        }, 1000);
    };

    return (
        <div className="auth-wrapper">
            <div className="form-container animate-fade-in">
                <div className="form-header">
                    <h2>CareerLens AI</h2>
                    <p>Create your account</p>
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="form-grid">
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input 
                                type="text" 
                                id="username"
                                name="username"
                                placeholder="User123" 
                                value={formData.username}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="contact">Contact</label>
                            <input 
                                type="tel" 
                                id="contact"
                                name="contact"
                                placeholder="+91..." 
                                value={formData.contact}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input 
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="email@example.com" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            id="password"
                            name="password"
                            placeholder="Enter password"
                            value={formData.password}
                            onChange={handleChange}
                            required 
                        />
                        <div className="checkbox-row">
                            <input 
                                type="checkbox" 
                                id="toggle" 
                                onChange={() => setShowPassword(!showPassword)} 
                            />
                            <label htmlFor="toggle">Show Password</label>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                <div className="form-footer">
                    <span>Already have an account?</span>
                    {/* Using a button with navigate instead of an anchor tag */}
                    <button 
                        type="button" 
                        className="secondary-link" 
                        onClick={() => navigate('/login')}
                    >
                        Login here
                    </button>
                </div>
            </div>
        </div>
    );
}