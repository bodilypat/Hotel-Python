/* src/services/roomService.js 
| -- 
*/ 
import { fetchAPI } from './api';

// Get all rooms
export const getRooms = () => fetchAPI('/rooms');

// Add a room 
export const addRoom = (roomData) => 
    fetchAPI('/rooms', {
        method: 'POST',
        data: JSON.stringify(roomData),
    });

// Get a single room by ID
export const getRoomById = (roomId) => fetchAPI(`/rooms/${roomId}`);

// Update a room
export const updateRoom = (roomId, roomData) =>
    fetchAPI(`/rooms/${roomId}`, {
        method: 'PUT',
        data: JSON.stringify(roomData),
    });

// Delete a room
export const deleteRoom = (roomId) =>
    fetchAPI(`/rooms/${roomId}`, {
        method: 'DELETE',
    });


