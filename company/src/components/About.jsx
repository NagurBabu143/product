import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <section id="about" className="about">
            <h2>About Us</h2>
            <div className="about-item left">
                <img src="/images/software-development.jpg" alt="Custom Software Development" className="about-image" />
                <div className="about-content">
                    <h3>Custom Software Development</h3>
                    <p>Innovators Tech Solutions is a leading provider of technology solutions designed to meet your business needs.</p>
                </div>
            </div>
            <div className="about-item right">
                <div className="about-content">
                    <h3>Mobile App Development</h3>
                    <p>Our mission is to empower businesses by delivering innovative and reliable solutions tailored to their goals.</p>
                </div>
                <img src="/images/mobile-app.jpg" alt="Mobile App Development" className="about-image" />
            </div>
            <div className="about-item left">
                <img src="/images/cloud-solutions.jpg" alt="Cloud Solutions" className="about-image" />
                <div className="about-content">
                    <h3>Cloud Solutions and Migration</h3>
                    <p>We specialize in seamless cloud migration strategies to help you transition smoothly to the cloud.</p>
                </div>
            </div>
            <div className="about-item right">
                <div className="about-content">
                    <h3>Data Analytics and Business Intelligence</h3>
                    <p>Utilize data to make informed business decisions and drive growth with our analytics solutions.</p>
                </div>
                <img src="/images/data-analytics.jpg" alt="Data Analytics" className="about-image" />
            </div>
            <div className="about-item left">
                <img src="/images/it-consulting.jpg" alt="IT Consulting" className="about-image" />
                <div className="about-content">
                    <h3>IT Consulting and Support</h3>
                    <p>Our dedicated team of experts is committed to ensuring your success through our comprehensive range of services.</p>
                </div>
            </div>
            <p>Let us help you drive your business forward with technology that works for you.</p>
        </section>
    );
};

export default About;
