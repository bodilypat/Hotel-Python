/* src/features/rooms/pages/Rooms.jsx 
| -- Rooms page component 
*/
import React from 'react';
import { useQuery } from '@tanstack/react-query';

import { fetchRooms } from '../services/room.service';
import RoomCard from '../components/RoomCard';

import Loader from '@/shared/components/Loader';
import ErrorState from '@/shared/components/ui/ErrorState';

function Rooms() { 
    const { 
        data: rooms, 
        isLoading, isError,
    } = useQuery({
        queryKey: ['rooms'],
        queryFn: () => fetchRooms(),
    });

    const handleSlect = (room) => {
        // Handle room selection logic 
        console.log('Selected room:', room);
    };

    if (isLoading) {
        return <Loader />;
    }
    if (isError) {
        return <ErrorState message="Failed to load rooms. Please try again." />;
    }

    return (
        <div className="rooms-container">
            <h1>Available Rooms</h1>
            <div className="rooms-list">
                {rooms.map((room) => (
                    <RoomCard
                        key={room.id}
                        room={room}
                        onSelect={() => handleSlect(room)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Rooms;
