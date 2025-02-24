import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="header-content">
                <div className="logo">
                    <img src="/images/logo.jpg" alt="Bus Travel Logo" className="logo-image" />
                </div>
                <h1 className="site-title">Bus Travel Service</h1>
                <div className="auth-buttons">
                    <button className="login-btn">Login</button>
                    <button className="signup-btn">Sign Up</button>
                </div>
            </div>
            <p className="tagline">Your journey, our responsibility. Experience comfort and safety with every ride.</p>
            <nav className="header-nav">
                <ul className="nav-links">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#about">About Us</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
            <div className="promo-banner">
                <p>🚍 Book your tickets now and get 20% off on your first ride! Limited time offer. 🚍</p>
            </div>
            <section className="search-section">
                <h2>Find Your Bus</h2>
                <form className="search-form">
                    <input type="text" placeholder="From" className="search-input" />
                    <input type="text" placeholder="To" className="search-input" />
                    <input type="date" className="search-input" />
                    <button type="submit" className="search-btn">Search</button>
                </form>
            </section>
        </header>
    );
};
export default Header