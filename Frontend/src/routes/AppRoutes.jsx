/* src/routes/AppRoutes.jsx
| -- AppRoutes
| -- This file defines the routes for the application using React Router. 
| -- Each route corresponds to a specific page or component in the app. 
| -- The Router component wraps around the Routes component, which contains individual Route components for each path and its corresponding element. 
| -- The NotFound route is a catch-all for any undefined paths, rendering a 404 page.
 */ 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard.jsx';
import Rooms from '../pages/Rooms.jsx';
import Bookings from '../pages/Bookings.jsx';
import Customer from '../pages/Customer.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/customer" element={<Customer />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}



