//src/features/guests/services/guestService.js 
import api from '@/services/api';

// Get all guests 
export const getGuests = async (params = {} ) => {
    try {
        const response = await api.get('/guests', { params });
        return response.data;
    } catch (error) {
        console.error('Error fetching guests:', error);
        throw error;
    }
};

// Get single guest by ID
export const getGuestById = async (guestId) => {
    try {
        const response = await api.get(`/guests/${guestId}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching guest with ID ${guestId}:`, error);
        throw error;
    }
};

// Create a new guest
export const createGuest = async (guestData) => {
    try {
        const response = await api.post('/guests', guestData);
        return response.data;
    } catch (error) {
        console.error('Error creating guest:', error);
        throw error;
    }
};

// Update an existing guest
export const updateGuest = async (guestId, guestData) => {
    try {
        const response = await api.put(`/guests/${guestId}`, guestData);
        return response.data;
    } catch (error) {
        console.error(`Error updating guest with ID ${guestId}:`, error);
        throw error;
    }
};

// Delete a guest
export const deleteGuest = async (guestId) => {
    try {
        const response = await api.delete(`/guests/${guestId}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting guest with ID ${guestId}:`, error);
        throw error;
    }
};

