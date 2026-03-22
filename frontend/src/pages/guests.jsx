/* src/pages/Guests.jsx
| -- Guests page component for managing hotel guests, including listing, adding, editing, and deleting guests
 */
import React, { useState, useEffect } from 'react';
import { getAllGuests, createGuest, updateGuest, deleteGuest } from '../services/guestService';

export default function Guests() {
    const [guests, setGuests] = useState([]);

    useEffect(() => {
        fetchGuests();
    }, []);

    const fetchGuests = async () => {
        try {
            const data = await getAllGuests();
            setGuests(data);
        } catch (error) {
            console.error('Error fetching guests:', error);
        }
    };

    const handleAddGuest = async (guestData) => {
        try {
            await createGuest(guestData);
            fetchGuests(); // Refresh the guest list after adding
        } catch (error) {
            console.error('Error adding guest:', error);
        }
    };

    const handleUpdateGuest = async (guestId, guestData) => {
        try {
            await updateGuest(guestId, guestData);
            fetchGuests(); // Refresh the guest list after updating
        } catch (error) {
            console.error('Error updating guest:', error);
        }
    };

    const handleDeleteGuest = async (guestId) => {
        try {
            await deleteGuest(guestId);
            fetchGuests(); // Refresh the guest list after deleting
        } catch (error) {
            console.error('Error deleting guest:', error);
        }
    };

    return (
        <div>
            <h1>Guests</h1>
            <ul>
                {guests.map(guest => (
                    <li key={guest.guest_id}>
                        {guest.first_name} {guest.last_name} - {guest.email}
                        {/* Add buttons for editing and deleting guests here */}
                        <button onClick={() => handleUpdateGuest(guest.guest_id, { ...guest, first_name: 'Updated Name' })}>Edit</button>
                        <button onClick={() => handleDeleteGuest(guest.guest_id)}>Delete</button>
                    </li>
                ))}
            </ul>
            {/* Add form for adding new guests here */}
            <button onClick={() => handleAddGuest({ first_name: 'Lunar', last_name: 'Azure', email: 'lunar@gmail.com' })}>Add Guest</button>    
        </div>
    );
}


