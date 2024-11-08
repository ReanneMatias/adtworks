// LoginForm.js
import React, { useState, useRef } from 'react';

const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleLogin = (e) => {
        e.preventDefault();

        // Correct values check
        if (username === 'reanne' && password === '123456789') {
            onLogin();
            alert('Login successful!');
        } else {
            alert('Incorrect username or password!');
            if (!username) usernameRef.current.focus();
            else passwordRef.current.focus();
        }
    };

    return (
        <form onSubmit={handleLogin} style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>Login</h2>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                ref={usernameRef}
                required
            />
            <br />
            <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                ref={passwordRef}
                required
            />
            <br />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? 'Hide Password' : 'Show Password'}
            </button>
            <br />
            <button type="submit">Login</button>
        </form>
    );
};

export default LoginForm;



