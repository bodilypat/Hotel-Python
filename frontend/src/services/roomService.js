/* src/services/roomService.jsx 
| -- Service functions for managing rooms in the hotel management system. 
| -- Provides CRUD operations for interacting with the rooms API endpoint. 
| -- Specicalized functions for checking room availability and updating room status.
| -- Error handling is included to manage API response errors and ensure smooth user experience.
| -- Compatible with React frontend and designed to work with the backend API endpoints defined in the Express server.
 */ 
import API from './api';

/* 
* Fetch all rooms
* GET /api/rooms
 */

export const getRooms = async () => {
    try {
        const response = await API.get('/rooms');
        return response.data;
    } catch (error) {
        console.error('Error fetching rooms:', error);
        throw error;
    }
};

/* 
* Fetch a single room by ID
* GET /api/rooms/:id
*/

export const getRoomById = async (id) => {
    try {
        const response = await API.get(`/rooms/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching room with ID ${id}:`, error);
        throw error;
    }
};

/* 
* Create a new room
* POST /api/rooms
*/
export const createRoom = async (roomData) => {
    try {
        const response = await API.post('/rooms', roomData);
        return response.data;
    } catch (error) {
        console.error('Error creating room:', error);
        throw error;
    }
};

/* 
* Update an existing room
* PUT /api/rooms/:id
*/
export const updateRoom = async (id, roomData) => {
    try {
        const response = await API.put(`/rooms/${id}`, roomData);
        return response.data;
    } catch (error) {
        console.error(`Error updating room with ID ${id}:`, error);
        throw error;
    }
};

/* 
* Delete a room
* DELETE /api/rooms/:id
*/
export const deleteRoom = async (id) => {
    try {
        const response = await API.delete(`/rooms/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error deleting room with ID ${id}:`, error);
        throw error;
    }
};

/*
* Check room availability
* GET /api/rooms/availability?check_in=YYYY-MM-DD&check_out=YYYY-MM-DD
*/

export const checkRoomAvailability = async (checkIn, checkOut) => {
    try {
        const response = await API.get('/rooms/availability', {
            params: { check_in: checkIn, check_out: checkOut }
        });
        return response.data;
    } catch (error) {
        console.error('Error checking room availability:', error);
        throw error;
    }
};

/*
* Update room status
* PATCH /api/rooms/:id/status
*/
export const updateRoomStatus = async (id, status) => {
    try {
        const response = await API.patch(`/rooms/${id}/status`, { status });
        return response.data;
    } catch (error) {
        console.error(`Error updating status for room with ID ${id}:`, error);
        throw error;
    }
};


