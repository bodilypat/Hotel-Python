/* src/pages/Rooms.jsx 
| -- Rooms page component
 */ 
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import RoomCard from '../components/RoomCard';
import { getRooms, addRoom } from '../services/roomService';

export default function Rooms() {
    const [rooms, setRooms] = useState([]);
    const [newRoom, setNewRoom] = useState({ number: '', type: '', price: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getRooms()
            .then(data => {
                setRooms(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching rooms:', error);
                setLoading(false);
            });
    }, []);

    const handleAddRoom = async (e) => {
        e.preventDefault();
        try {
            await addRoom(newRoom);
            fetchRooms();
            setNewRoom({ number: '', type: '', price: '' });
            alert("Room added!");
        } catch (error) {
            console.error('Error adding room:', error);
            alert("Failed to add room.");
        }
    };

    const fetchRooms = () => {
        getRooms()
            .then(data => setRooms(data))
            .catch(error => console.error('Error fetching rooms:', error));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="rooms">
                    <h1>Rooms</h1>
                    <form onSubmit={handleAddRoom} className="add-room-form">
                        <input
                            type="text"
                            placeholder="Room Number"
                            value={newRoom.number}
                            onChange={e => setNewRoom({ ...newRoom, number: e.target.value })}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Room Type"
                            value={newRoom.type}
                            onChange={e => setNewRoom({ ...newRoom, type: e.target.value })}
                            required
                        />
                        <input
                            type="number"
                            placeholder="Price"
                            value={newRoom.price}
                            onChange={e => setNewRoom({ ...newRoom, price: e.target.value })}
                            required
                        />
                        <button type="submit">Add Room</button>
                    </form>
                    <div className="room-list">
                        {rooms.map(room => (
                            <RoomCard key={room.id} room={room} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


    
