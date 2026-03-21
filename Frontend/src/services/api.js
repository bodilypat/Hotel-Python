/* src/services/api.js 
| -- Centralize all API calls:
| -- 
 */
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Adjust as needed

export async function fetchAPI(endpoint, options = {}) {
    const response = await axios({
        headers: {
            'Content-Type': 'application/json',
        },
        ...options,
        url: `${API_BASE_URL}${endpoint}`,
    });
    
    if (!response.ok) throw new Error(`API error: ${response.statusText}`);
    return response.data;
}
