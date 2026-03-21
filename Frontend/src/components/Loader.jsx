/* src/components/Loader.jsx 
| -- Loader
| -- This component represents a loading spinner for the application. 
| -- It is displayed while data is being fetched or when the application is performing an operation that requires the user to wait.
 */ 
import React from 'react';
import './styles.css'; // Importing CSS for styling the loader
 
export default function Loader() {
    return (
        <div className="loader">
            <div className="spinner"></div>
        </div>
    );
}


