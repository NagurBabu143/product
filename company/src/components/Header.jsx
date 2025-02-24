import React, { useState } from 'react';
import '../styles/Header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const Menu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="header">
            <img src="/images/1.svg" alt="Company Logo" className="logo" />
            <button className="menu-button" onClick={Menu}>
                {menuOpen ? 'Close' : 'Menu'}
            </button>
            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#portfolio">Portfolio</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
