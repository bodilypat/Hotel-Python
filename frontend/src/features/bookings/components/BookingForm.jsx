/* src/features/bookings/components/BookingForm.jsx 
| -- Booking form component 
*/ 
import React, { useState } from 'react';

function BookingForm({ onSubmit, initialData = {} }) {
    const [formData, setFormData] = useState(initialData);

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
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="guestName"
                placeholder="Guest Name"
                value={formData.guestName || ''}
                onChange={handleChange}
            />
            <input
                type="email"
                name="guestEmail"
                placeholder="Guest Email"
                value={formData.guestEmail || ''}
                onChange={handleChange}
            />
            <button type="submit">Submit Booking</button>
        </form>
    );
}

export default BookingForm;
