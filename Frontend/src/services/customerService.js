/* src/services/customerService.js 
| -- 
 */
import { fetchAPI } from './api';

// Get all customers
export const getCustomers = () => fetchAPI('/customers');

// Add a customer
export const addCustomer = (customerData) =>
    fetchAPI('/customers', {
        method: 'POST',
        data: JSON.stringify(customerData),
    });

// Get a single customer by ID
export const getCustomerById = (customerId) => fetchAPI(`/customers/${customerId}`);

// Update a customer
export const updateCustomer = (customerId, customerData) =>
    fetchAPI(`/customers/${customerId}`, {
        method: 'PUT',
        data: JSON.stringify(customerData),
    });

// Delete a customer
export const deleteCustomer = (customerId) =>
    fetchAPI(`/customers/${customerId}`, {
        method: 'DELETE',
    });

    
