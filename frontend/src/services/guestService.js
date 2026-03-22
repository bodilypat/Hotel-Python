/* src/services/guestService.js 
| -- Guest service for API interactions related to guests  
*/
import API from '../api';

export const getAllGuests = async () => {
    try {
        const response = await API.get('/guests');
        return response.data;
    } catch (error) {
        console.error('Error fetching guests:', error);
        throw error;
    }
};

export const getGuestById = async (guestId) => {
    try {
        const response = await API.get(`/guests/${guestId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching guest with ID ${guestId}:`, error);
        throw error;
    }
};

export const createGuest = async (guestData) => {
    try {
        const response = await API.post('/guests', guestData);
        return response.data;
    } catch (error) {
        console.error('Error creating guest:', error);
        throw error;
    }
};

export const updateGuest = async (guestId, guestData) => {
    try {
        const response = await API.put(`/guests/${guestId}`, guestData);
        return response.data;
    } catch (error) {
        console.error(`Error updating guest with ID ${guestId}:`, error);
        throw error;
    }
};

export const deleteGuest = async (guestId) => {
    try {
        const response = await API.delete(`/guests/${guestId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting guest with ID ${guestId}:`, error);
        throw error;
    }
};



