// Footer.js
import React from 'react';
import './Footer.css'; // Import your CSS for styling

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <footer className="footer">
      <p>
        &copy; {currentYear} Thank you to <a href="https://c3-truestudio.cargo.site/" target="_blank" rel="noopener noreferrer">Cargo</a> for the inspiration.
      </p>
    </footer>
  );
};

export default Footer;