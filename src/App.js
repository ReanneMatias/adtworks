// App.js
import React, { useState, useCallback } from 'react';
import StudentInfo from './components/StudentInfo';
import LoginForm from './components/LoginForm';
import MathOperations from './components/MathOperations';
import Calculator from './components/Calculator';
import { ProfileProvider } from './components/ProfileContext';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);

    // Handles login
    const handleLogin = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    // Handles logout with confirmation
    const handleLogout = useCallback(() => {
        if (window.confirm('Are you sure you want to logout?')) {
            setIsLoggedIn(false);
        }
    }, []);

    // Toggles between dark and light themes
    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <ProfileProvider>
            <div
                style={{
                    backgroundColor: darkTheme ? '#333' : '#fff',
                    color: darkTheme ? '#fff' : '#000',
                    minHeight: '100vh',
                    padding: '20px',
                    transition: 'background-color 0.3s, color 0.3s',
                }}
            >
                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        padding: '10px',
                        borderRadius: '5px',
                        border: 'none',
                        backgroundColor: darkTheme ? '#f9f9f9' : '#444',
                        color: darkTheme ? '#444' : '#fff',
                        cursor: 'pointer'
                    }}
                >
                    {darkTheme ? 'Light Theme' : 'Dark Theme'}
                </button>

                {/* Student Information */}
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <h3>Reanne Ashley S.R. Matias</h3>
                    <p>Section: BSIT 3B</p>
                </div>

                {/* Login Form or Logged-In Content */}
                {!isLoggedIn ? (
                    <div
                        style={{
                            textAlign: 'center',
                            margin: '0 auto',
                            maxWidth: '300px',
                            padding: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '5px',
                            backgroundColor: darkTheme ? '#444' : '#f9f9f9'
                        }}
                    >
                        <LoginForm onLogin={handleLogin} />
                    </div>
                ) : (
                    <div style={{ textAlign: 'center' }}>
                        <StudentInfo />
                        <button
                            onClick={handleLogout}
                            style={{
                                marginTop: '20px',
                                padding: '10px 20px',
                                border: 'none',
                                borderRadius: '5px',
                                backgroundColor: '#f44336',
                                color: 'white',
                                cursor: 'pointer',
                                fontSize: '16px',
                            }}
                        >
                            Logout
                        </button>
                    </div>
                )}

                {/* Math Operations Component */}
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <MathOperations />
                </div>

                {/* Calculator Component */}
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <Calculator />
                </div>
            </div>
        </ProfileProvider>
    );
};

export default App;









