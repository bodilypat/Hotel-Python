/* src/services/authService.js 
| --  API call functions for user authentication and management
| -- Includes functions for login, registration, logout, and fetching current user info
| -- Designed to work with the backend API endpoints defined in the Express server
| -- Error handling is included to manage API response errors and ensure smooth user experience
| -- Compatible with React frontend and can be used to manage user authentication state in the app
*/
import API from './api';

/**
* User login
* POST /api/auth/login
*/
export const login = async (credentials) => {
    try {
        const response = await API.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

/**
* User registration
* POST /api/auth/register
*/
export const register = async (userData) => {
    try {
        const response = await API.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        console.error('Error registering user:', error);
        throw error;
    }
};

/**
 * User logout
 * POST /api/auth/logout
 */
export const logout = async () => {
    try {
        const response = await API.post('/auth/logout');
        return response.data;
    } catch (error) {
        console.error('Error logging out:', error);
        throw error;
    }
};

/**
 * Get current user info
 * GET /api/auth/me
 * This endpoint can be used to check if the user is authenticated and to get their details
 * This can be called on app load to restore user session if a token is present
 * GET /api/auth/me
 */
export const getCurrentUser = async () => {
    try {
        const response = await API.get('/auth/me');
        return response.data;
    } catch (error) {
        console.error('Error fetching current user info:', error);
        throw error;
    }
};




