/* src/components/Modal.jsx 
| -- Modal
| -- This component represents a modal dialog in the application. 
| -- It can be used to display additional information or prompt the user for input.
 */ 
import React from 'react';
import './styles.css'; // Importing CSS for styling the modal

export default function Modal({ isOpen, onClose, children }) {
    if (!isOpen) return null; // If the modal is not open, don't render anything

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

