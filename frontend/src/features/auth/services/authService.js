/* src/features/auth/services/authService.js
| -- Service for handling authentication logic
| --
 */
import client from '@/services/client';

// API calls 
export const loginUser = async (credentials) => {
    try {
        const response = await client.post('/auth/login', credentials);

        // Store token in localStorage
        localStorage.setItem('token', response.data.token);

        return response.data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await client.post('/auth/logout');
        // Remove token from localStorage
        localStorage.removeItem('token');
    } catch (error) {
        console.error('Logout error:', error);
        throw error;
    }
};

export const getCurrentUser = async () => {
    const token = localStorage.getItem('token');

    if (!token) {
        return null;
    }

    const response = await client.get('/auth/me', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

