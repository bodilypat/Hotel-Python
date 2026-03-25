/* src/features/rooms/components/RoomCard.jsx 
| -- Room card component 
*/
import React from 'react';

function RoomCard({ room, onSelect }) {
    return (
        <div className="room-card" onClick={() => onSelect(room)}>
            <img 
                src={room.image || '/assets/images/default-room.jpg'}
                alt={room.name}
                className="room-image"
            />
            <div className="room-info">
                <h3>{room.name}</h3>
                <p>Type: {room.type}</p>
                <p>Price: ${room.price}</p>
                <p 
                    className={`availability ${room.available ? 'status available' : 'statusunavailable'}`}
                >
                    {room.available ? 'Available' : 'Booked'}
                </p>
            </div>
        </div>
    );
};

export default RoomCard;


