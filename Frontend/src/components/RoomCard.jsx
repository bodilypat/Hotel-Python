/* src/components/RoomCard.jsx
| -- RoomCard
| -- This component represents a single room card in the application. 
| -- It displays information about the room and provides options for booking.
 */ 
import React from 'react';
import { useState } from 'react';
import './styles.css'; // Importing CSS for styling the room card

export default function RoomCard({ room }) {
    return (
        <div className="room-card">
            <h3>{room.name}</h3>
            <p>Type: {room.type}</p>
            <p>Status: {room.status}</p>
        </div>
    );
}

