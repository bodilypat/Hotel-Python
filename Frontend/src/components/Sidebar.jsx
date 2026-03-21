/* src/components/Sidebar.jsx
| -- Sidebar
| -- This component represents the sidebar for the application. 
| -- It contains navigation links and other interactive elements for the user to access different sections of the app.
 */ 
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Import the CSS file for styling

export default function Sidebar() {
    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <Link to="/">Home</Link>
            <Link to="/rooms">Rooms</Link>
            <Link to="/booking">Booking</Link>
            <Link to="/customer">Customer</Link>
        </div>
    );
}

