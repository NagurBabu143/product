import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 Shaik NagurBabu Website. All rights reserved.</p>
                <div className="footer-description">
                    <p>Your gateway to quality education and learning.</p>
                </div>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#courses">Courses</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer-social">
                    <a href="#Facebook" >Facebook</a>
                    <a href="#Twitter" aria-label="Twitter">Twitter</a>
                    <a href="#LinkedIn" aria-label="LinkedIn">LinkedIn</a>
                    <a href="#Instagram" aria-label="Instagram">Instagram</a>
                    <a href="#YouTube" aria-label="YouTube">YouTube</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
