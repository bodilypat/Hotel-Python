/* src/components/Sidebar.jsx 
| -- Sidebar component for the hotel management system, providing navigation links to different sections of the application such as Dashboard, Guests, Rooms, Reservations, Billing, and Services. 
| -- The Sidebar is designed to be a vertical navigation menu that allows users to easily access different pages of the app. 
| -- It uses React Router's Link component for client-side navigation and is styled with CSS for a consistent look and feel across the application. 
| -- The Sidebar also includes a logout button that utilizes the AuthContext to handle user logout functionality, ensuring that users can securely exit their session.
 */ 
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function Sidebar() {
    const { user, logout } = useContext(AuthContext);
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <Link to="/">Dashboard</Link>
            <Link to="/guests">Guests</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/reservations">Reservations</Link>
            <Link to="/payments">Payments</Link>
            <Link to="/services">Services</Link>
            {user && <button onClick={logout}>Logout</button>}
        </div>
    );
}


