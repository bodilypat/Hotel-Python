/* src/components/ProtectedRoutes.jsx 
| -- ProtectedRoutes
| -- This component represents a route that is protected and can only be accessed by authenticated users.
 */ 
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Importing a custom hook to check authentication status

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth(); // Get the authentication status from the custom hook

    if (!isAuthenticated) {
        return <Navigate to="/login" />; // Redirect to the login page if the user is not authenticated
    }
    return children; // Render the protected component if the user is authenticated
}

