import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#privacy-policy">Privacy Policy</a></li>
                        <li><a href="#terms-of-service">Terms of Service</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h3>Contact Us</h3>
                    <p>Email: contact@innovatorstech.com</p>
                    <p>Phone: +9 (923) 456-7890</p>
                    
                </div>
                <div className="about-company">
                    <h3>About Innovators Tech Solutions</h3>
                    <p>We provide innovative technology solutions to help businesses grow and succeed in the digital age.</p>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <a href="https://Facebook.com" className="social-icon">Facebook</a>
                    <a href="https://Twitter.com" className="social-icon">Twitter</a>
                    <a href="https://LinkedIn.com" className="social-icon">LinkedIn</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Innovators Tech Solutions. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
