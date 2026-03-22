/* src/routes/AppRoutes.jsx 
| -- AppRoutes
| -- This file defines the routes for the application using React Router. 
| -- Each route corresponds to a specific page or component in the app. 
| -- The Router component wraps around the Routes component, which contains individual Route components for each path and its corresponding element. 
| -- The NotFound route is a catch-all for any undefined paths, rendering a 404 page.
 */ 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Dashboard';
import Guests from '../pages/Guests';
import Rooms from '../pages/Rooms';
import Reservations from '../pages/Reservations';
import Billing from '../pages/Payments';
import Services from '../pages/Services';
import Login from '../pages/Login';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/guests" element={<Guests />} />
                <Route path="/rooms" element={<Rooms />} />
                <Route path="/reservations" element={<Reservations />} />
                <Route path="/billing" element={<Billing />} />
                <Route path="/services" element={<Services />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
}






