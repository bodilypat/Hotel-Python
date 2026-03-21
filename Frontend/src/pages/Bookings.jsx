/* src/pages/Bookings.jsx 
| -- Bookings page component
 */ 
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import BookingForm from '../components/BookingForm';
import { getBookings } from '../services/bookingService';

export default function Bookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchBookings = async () => {
        setLoading(true);
        getBookings()
            .then((data) => {
                setBookings(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching bookings:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    if (loading) return <div>Loading booking...</div>;

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="content">
                    <h1>Bookings</h1>
                    <BookingForm onBookingCreated={fetchBookings} />
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Customer Name</th>
                                <th>Room Number</th>
                                <th>Check-in Date</th>
                                <th>Check-out Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>{booking.id}</td>
                                    <td>{booking.customerName}</td>
                                    <td>{booking.roomNumber}</td>
                                    <td>{booking.checkInDate}</td>
                                    <td>{booking.checkOutDate}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}




