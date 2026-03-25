/* src/features/auth/context/AuthContext.jsx 
| -- Context for managing authentication state
*/
import React, { createContext, useState, useEffect } from 'react';
import { loginUser, logoutUser, getCurrentUser } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in on component mount
    useEffect(() => {
    const fetchUser = async () => {
        try {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
           } catch (error) {
                console.error('Error fetching user data:', error);
           } finally {
              setLoading(false);
            }
        };
        fetchUser();
    }, []);

    const login = async (credentials) => {
        const data = await loginUser(credentials);
        setUser(data.user);
        return data;
    };

    const logout = async () => {
        await logoutUser();
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ 
            user, 
            loading, 
            isAuthenticated: !!user,
            login,
            logout
         }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;



