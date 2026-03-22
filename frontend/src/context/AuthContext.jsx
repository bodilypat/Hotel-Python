/* src/context/AuthContext.jsx 
| -- AuthContext
| -- This file defines the AuthContext for managing authentication state across the application. 
| -- It provides a context and a provider component that wraps around the app, allowing any component to access authentication data and functions. 
| -- The context includes state for the current user, a login function to authenticate users, and a logout function to clear authentication data. 
| -- This setup enables centralized management of authentication logic and state, making it easier to maintain and use throughout the app.
 */ 
import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token); // Store token in localStorage
    }

    const register = (userData) => {
        setUser(userData);
        localStorage.setItem('token', userData.token); // Store token in localStorage
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('token'); // Remove token from localStorage
    }

    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};


