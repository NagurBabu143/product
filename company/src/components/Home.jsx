import React, { useState } from 'react';
import '../styles/Home.css';

const Home = () => {
    const [message, setMessage] = useState('');

    const ButtonClick = () => {
        setMessage('Thank you for visiting Innovators Tech Solutions!');
    };

    return (
        <section id="home" className="home">
             
            <h1>Welcome to Innovators Tech Solutions</h1>
            <p>Your partner in innovative tech solutions for business success.</p>
            <button onClick={ButtonClick}>Learn More</button>
            {message && <p className="message">{message}</p>}
        </section>
    );
};

export default Home;
