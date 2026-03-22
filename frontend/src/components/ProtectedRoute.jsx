/* src/components/ProtectedRoutes.jsx  
| -- ProtectedRoute component to restrict access to certain routes based on authentication status. 
| -- This component checks if the user is authenticated using the AuthContext. 
| -- If the user is not authenticated, it redirects them to the login page.
 */
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
    
export default function ProtectedRoute({ children }) {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to="/login" />;
    }

    return children;
}

