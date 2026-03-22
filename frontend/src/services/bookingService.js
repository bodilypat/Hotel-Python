/* src/services/bookingService.js 
| -- Booking-related API calls 
 */
import { fetchAPI } from './api';

// Get all bookings
export const getBookings = () => fetchAPI('/bookings');

// Add a booking
export const addBooking = (bookingData) => 
    fetchAPI('/bookings', {
        method: 'POST',
        data: JSON.stringify(bookingData),
    });

// Get a single booking by ID
export const getBookingById = (bookingId) => fetchAPI(`/bookings/${bookingId}`);

// Update a booking
export const updateBooking = (bookingId, bookingData) =>
    fetchAPI(`/bookings/${bookingId}`, {
        method: 'PUT',
        data: JSON.stringify(bookingData),
    });

// Delete a booking
export const deleteBooking = (bookingId) =>
    fetchAPI(`/bookings/${bookingId}`, {
        method: 'DELETE',
    });


