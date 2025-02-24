import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p>&copy; 2024 Bus Travel Service. All rights reserved.</p>
                    <p>Designed by Shaik Nagurbabu</p>
                    <div className="social-links">
                        <a href="https://www.facebook.com" className="social-link" target="_blank" rel="noopener noreferrer">Facebook</a>
                        <a href="https://twitter.com" className="social-link" target="_blank" rel="noopener noreferrer">Twitter</a>
                        <a href="https://www.instagram.com" className="social-link" target="_blank" rel="noopener noreferrer">Instagram</a>
                        <a href="https://www.linkedin.com" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>

                <div className="footer-right">
                    <div className="footer-navigation">
                        <h4>Quick Links</h4>
                        <ul className="footer-menu">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#gallery">Gallery</a></li>
                            <li><a href="#about">About Us</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li><a href="#booking">Book a Bus</a></li>
                        </ul>
                    </div>

                    <div className="footer-contact">
                        <h4>Contact Us</h4>
                        <p>Email: Nagur@bustravelservice.com</p>
                        <p>Phone: +91 (943) 565-4567</p>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Subscribe to Our Newsletter</h4>
                        <form className="newsletter-form">
                            <input type="email" placeholder="Enter your email" required className="newsletter-input" />
                            <button type="submit" className="newsletter-button">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="footer-additional">
                <div className="footer-about">
                    <h4>About Us</h4>
                    <p>We are dedicated to providing safe, comfortable, and affordable bus travel experiences. Join us on your next adventure!</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
