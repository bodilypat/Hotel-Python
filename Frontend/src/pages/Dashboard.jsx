/* src/pages/Dashboard.jsx 
| -- Dashboard page component
 */
import {useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import { getRooms } from '../services/roomService';
import { getBookings } from '../services/bookingService';
import { getCustomers } from '../services/customerService';

export default function Dashboard() {
    const [roomsCount, setRoomsCount] = useState(0);
    const [bookingsCount, setBookingsCount] = useState(0);
    const [customersCount, setCustomersCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([getRooms(), getBookings(), getCustomers()])
            .then(([rooms, bookings, customers]) => {
                setRoomsCount(rooms.length);
                setBookingsCount(bookings.length);
                setCustomersCount(customers.length);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching dashboard data:', error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="dashboard">
                    <h1>Dashboard</h1>
                    <div className="cards">
                        <div className="card stat">
                            <h2>Rooms</h2>
                            <p>{roomsCount}</p>
                        </div>
                        <div className="card stat">
                            <h2>Bookings</h2>
                            <p>{bookingsCount}</p>
                        </div>
                        <div className="card stat">
                            <h2>Customers</h2>
                            <p>{customersCount}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
