// Modal.js
import React from 'react';
import './Modal.css'; // Import your CSS for styling

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if modal is not open

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose} aria-label="Close modal">
          &times;
        </button>
        <h2>Contact Me</h2>
        <p>Shoot me an <a href="mailto:claireflpk@gmail.com">email</a></p>
      </div>
    </div>
  );
};

export default Modal;