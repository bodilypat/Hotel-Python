/* src/features/rooms/services/room.service.js 
| -- Room service functions
*/ 
import client from '@/services/client';

const API_BASE = '/rooms';

export const fetchRooms = async (id) => {
    const response = await client.get(`${API_BASE}/hotel/${id}`);
    return response.data;
};

export const fetchRoomById = async (id) => {
    const response = await client.get(`${API_BASE}/${id}`);
    return response.data;
};

export const createRoom = async (roomData) => {
    const response = await client.post(API_BASE, roomData);
    return response.data;
};

export const updateRoom = async (id, roomData) => {
    const response = await client.put(`${API_BASE}/${id}`, roomData);
    return response.data;
};

export const deleteRoom = async (id) => {
    const response = await client.delete(`${API_BASE}/${id}`);
    return response.data;
};

