/* src/features/auth/hooks/useAuth.js 
| -- Custom hook for handling authentication logic. 
 */
import { useState, useEffect, createContext, useContext } from 'react';
import * as authService from '../services/auth.storage';

/* 
| -- AUTH Context
 */
const AuthContext = createContext();

/* 
| -- Provider (Wrap your App) 
 */

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Load user on app startup 
    useEffect(() => {
        const initAuth = () => {
            const storedUser = authService.getCurrentUser();
            if (storedUser) {
                setUser(storedUser);
            }   
            setLoading(false);
        };
        initAuth();
    }, []);

    // Login 
    const login = (token, userData) => {
        if (!token || !userData) return;

        // Save token and user in storage
        authService.setToken(token);
        authService.setUser(userData);

        // Update state
        setUser(userData);
    }

    // Logout
    const logout = () => {
        authStorage.clearAuthData();
        setUser(null);
    };

    // Derived state 
    const isAuthenticated = Boolean(user);

    return (
        <AuthContext.Provider value={{ 
            user, 
            login, 
            logout,
            isAuthenticated, 
            loading, 
        }}
        >
            {children}
        </AuthContext.Provider>
    );
};

// Custom hook to consume Auth Context 
export const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};





