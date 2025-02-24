import React, { useState } from 'react';
import '../styles/Services.css';

const Services = () => {
    const [Service, setService] = useState(null);

    const services = [
        { id: 1, name: 'Web Development', details: 'We create responsive and modern websites that enhance user engagement and drive business growth.' },
        { id: 2, name: 'Mobile Apps', details: 'Developing user-friendly mobile applications that provide seamless experiences across all devices.' },
        { id: 3, name: 'Cloud Solutions', details: 'Providing scalable cloud computing services to enhance operational efficiency and flexibility.' },
        { id: 4, name: 'Data Analytics', details: 'Transforming your data into actionable insights for better decision-making and strategic planning.' },
        { id: 5, name: 'IT Consulting', details: 'Offering expert consulting services to help you navigate technology challenges and optimize performance.' },
    ];

    return (
        <section id="services" className="services">
            <h2>Our Services</h2>
            <div className="service-cards">
                {services.map(service => (
                    <div key={service.id} className="service-card" onClick={() => setService(service)}>
                        <h3>{service.name}</h3>
                    </div>
                ))}
            </div>
            {Service && (
                <div className="service-details">
                    <h3>{Service.name}</h3>
                    <p>{Service.details}</p>
                    <button className="close-details" onClick={() => setService(null)}>Close</button>
                </div>
            )}
        </section>
    );
};

export default Services;
