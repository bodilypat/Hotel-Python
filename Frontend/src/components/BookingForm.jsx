/* src/components/BookingForm.jsx 
| -- BookingForm
| -- This component represents the form for booking a room in the application. 
| -- It allows users to input their booking details and submit the request.
 */ 
import React from 'react';
import { useState } from 'react';
import './styles.css'; // Importing CSS for styling the booking form

export default function BookingForm({ onSubmit }) {
    const [formData, setFormData] = useState({
        guestName: '',
        checkIn: '',
        checkOut: '',
        roomType: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="guestName">Guest Name:</label>
                <input
                    type="text"
                    id="guestName"
                    name="guestName"
                    value={formData.guestName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="checkIn">Check-in Date:</label>
                <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="checkOut">Check-out Date:</label>
                <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="roomType">Room Type:</label>
                <select
                    id="roomType"
                    name="roomType"
                    value={formData.roomType}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select a room type</option>
                    <option value="single">Single</option>
                    <option value="double">Double</option>
                    <option value="suite">Suite</option>
                </select>
            </div>
            <button type="submit">Book Room</button>
        </form>
    );
}
