import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const Change = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value ,[e.target.email]:e.target.value});
    };

    const Submit = (e) => {
        e.preventDefault();
        alert(`Thank you, ${formData.name},${formData.email} for contacting us!`);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Us</h2>
            <form onSubmit={Submit}>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={Change} required />
                <input type="email" name="email" placeholder="Email" value={formData.email} onChange={Change} required />
                <textarea name="message" placeholder="Message" value={formData.message} onChange={Change} required></textarea>
                <button type="submit">Send</button>
            </form>
        </section>
    );
};

export default Contact;
