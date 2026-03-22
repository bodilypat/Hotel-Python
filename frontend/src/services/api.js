/* 
| -- Centralize all API calls:
 */

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

// Add token automatically 
API_BASE_URL.interceptors.request.use(config => {
    const token = localStorage.getItem('token'); // token is stored in localStorage
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API_BASE_URL;

