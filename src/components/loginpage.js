/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
 import './loginpage.css';
 

export const loginpage = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:=', userName, 'Email:=', email, 'Password:=', password);
  };

  return (
    <div className="login-container"> {/* Container for the entire login page */}
      <div className="login-card"> {/* Card-like container for the form */}
        <h2 className="login-title">Login</h2> {/* Form title */}
        <form onSubmit={handleSubmit} className="login-form"> {/* Form element with submit handler */}
          <div className="input-group"> {/* Input group for username */}
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
              placeholder="Enter your username"
            />
          </div>

          <div className="input-group"> {/* Input group for email */}
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
            />
          </div>

          <div className="input-group"> {/* Input group for password */}
            <label htmlFor="password">Password</label>
            <div className="password-input-wrapper"> {/* Wrapper for password input and toggle button */}
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="show-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? 'Hide' : 'Show'} {/* Toggle button text */}
              </button>
            </div>
          </div>

          <button type="submit" className="login-button">Login</button> {/* Submit button */}
        </form>
        <p className="signup-text"> {/* Link to login page for existing users */}
          Don't have an account? <a href="/">Sign Up</a>
        </p>
      </div>
    </div>
  );
  
}
 export default loginpage;

