import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            console.log("Form Submitted:", formData);
            setLoading(false);
            navigate('/dashboard');
        }, 1000);
    };

    return (
        <div className="auth-wrapper">
            <div className="form-container animate-fade-in">
                <div className="form-header">
                    <h2>Welcome Back</h2>
                    <p>Login to CareerLens AI</p>
                </div>

                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username"
                            name="username"
                            placeholder="Enter your username" 
                            value={formData.username}
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
                            placeholder="••••••••"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                        
                        <div className="checkbox-row">
                            <input
                                type="checkbox"
                                id="login-eye-toggle"
                                onChange={() => setShowPassword(!showPassword)}
                            />
                            <label htmlFor="login-eye-toggle">
                                {showPassword ? " Hide Password" : " Show Password"}
                            </label>
                        </div>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="form-footer">
                    <span>Don't have an account?</span>
                    <button 
                        type="button" 
                        className="secondary-link" 
                        onClick={() => navigate('/signup')}
                    >
                        Sign Up Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Login;