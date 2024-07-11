// src/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    // Load user from local storage if exists
    useEffect(() => {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const login = (username, password) => {
        const savedUser = JSON.parse(localStorage.getItem('userCredentials'));
        if (savedUser && savedUser.username === username && savedUser.password === password) {
            const user = { username };
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
            navigate('/property-form');
        } else {
            alert('Invalid credentials');
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        setUser(null);
        navigate('/login');
    };

    const signup = (username, password) => {
        const newUser = { username, password };
        localStorage.setItem('userCredentials', JSON.stringify(newUser));
        navigate('/login');
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, signup }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
