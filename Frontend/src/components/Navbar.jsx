/* src/components/Navbar.jsx
| -- Navbar
| -- This component represents the navigation bar for the application. 
| -- It contains links to different sections of the app and provides a consistent way for users to navigate between pages.
 */ 
import React from 'react';
import './styles.css'; // Importing CSS for styling the navbar

export default function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar-title">Hotel Management</h1>
        </div>
    );
}
