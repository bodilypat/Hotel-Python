/* src/components/CustomerCard.jsx 
| -- CustomerCard
| -- This component represents a single customer card in the application. 
| -- It displays information about the customer and provides options for managing their profile.
 */ 
import React from 'react';
import { useState } from 'react';
import './styles.css'; // Importing CSS for styling the customer card

export default function CustomerCard({ customer }) {
    return (
        <div className="customer-card">
            <h3>{customer.name}</h3>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
        </div>
    );
}

