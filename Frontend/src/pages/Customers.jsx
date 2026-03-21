/* src/pages/Customers.jsx 
| -- Customers page component
 */ 
import { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import CustomerCard from '../components/CustomerCard';
import { getCustomers, addCustomer } from '../services/customerService';

export default function Customers() {
    const [customers, setCustomers] = useState([]);
    const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getCustomers()
            .then(data => {
                setCustomers(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching customers:', error);
                setLoading(false);
            });
    }, []);

    const handleAddCustomer = async (e) => {
        e.preventDefault();
        try {
            await addCustomer(newCustomer);
            fetchCustomers();
            setNewCustomer({ name: '', email: '' });
            alert("Customer added!");
        } catch (error) {
            console.error('Error adding customer:', error);
            alert("Failed to add customer.");
        }
    };

    const fetchCustomers = () => {
        getCustomers()
            .then(data => setCustomers(data))
            .catch(error => console.error('Error fetching customers:', error));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="layout">
            <Sidebar />
            <div className="main-content">
                <Navbar />
                <div className="customers">
                    <h1>Customers</h1>
                    <form onSubmit={handleAddCustomer} className="add-customer-form">
                        <input
                            type="text"
                            placeholder="Customer Name"
                            value={newCustomer.name}
                            onChange={(e) => setNewCustomer({ ...newCustomer, name: e.target.value })}
                        />
                        <input
                            type="email"
                            placeholder="Customer Email"
                            value={newCustomer.email}
                            onChange={(e) => setNewCustomer({ ...newCustomer, email: e.target.value })}
                        />
                        <button type="submit">Add Customer</button>
                    </form>
                    <div className="customer-list">
                        {customers.map((customer) => (
                            <CustomerCard key={customer.id} customer={customer} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}


