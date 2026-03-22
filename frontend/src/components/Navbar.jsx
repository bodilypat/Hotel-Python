/* src/components/Navbar.jsx
| -- Navbar component for the hotel management system, providing navigation links to different pages such as Dashboard, Guests, Rooms, Reservations, Billing, and Services. 
| -- The Navbar uses React Router's Link component for client-side navigation and is styled with CSS for a consistent look and feel across the application. 
| -- It also includes a logout button that utilizes the AuthContext to handle user logout functionality, ensuring that users can securely exit their session.
 */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
export default function Navbar() {
    const { user, logout } = useContext(AuthContext);
    return (
        <nav className="navbar">
            <h1>Blossom Hotel Management System</h1>
            <ul className="nav-links">
                <li><Link to="/">Dashboard</Link></li>
                <li><Link to="/guests">Guests</Link></li>
                <li><Link to="/rooms">Rooms</Link></li>
                <li><Link to="/reservations">Reservations</Link></li>
                <li><Link to="/payments">Payments</Link></li>
                <li><Link to="/services">Services</Link></li>
            </ul>
            {user && <button onClick={logout}>Logout</button>}
        </nav>
    );
}
