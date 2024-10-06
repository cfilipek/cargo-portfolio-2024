// Navbar.js
import React, { useState } from 'react';
import Eyes from './Eyes';
import './Navbar.css'; // Import CSS for styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faLinkedin, faMedium} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/fontawesome-free-solid'


const Navbar = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href='/'><h1 className="logo">Claire Filipek</h1></a>
        < Eyes />
        <div className="hamburger" onClick={toggleMenu}>
          {/* Hamburger icon */}
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
          <div className={`line ${isMenuOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li>
              <a href="https://www.youtube.com/@clairecodes" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faYoutube} onClick={toggleMenu}/>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/cfilipek/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}  onClick={toggleMenu}/>
              </a>
            </li>
            <li>
              <a href="https://medium.com/@iloveclair" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faMedium}  onClick={toggleMenu}/>
              </a>
            </li>

            <li>
              <button onClick={props.openModal} aria-label="Open contact form">
                <FontAwesomeIcon icon={faEnvelope} onClick={toggleMenu}/>
              </button>
            </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;