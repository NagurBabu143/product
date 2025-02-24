import React from 'react';
import './About.css';

const About = () => {
    return (
        <section className="about">
            <h2>About Our College</h2>
            <div className="about-content">
                <div className="left-column">
                    <h3>Mission</h3>
                    <p>
                        Our college is committed to providing quality education and fostering a supportive community.
                        We offer a wide range of programs and resources to help students succeed academically and personally.
                    </p>
                    <img 
                        src="/path-to-mission-image.jpg" 
                        alt="Mission" 
                        className="about-image"
                    />
                    <h3>Values</h3>
                    <ul>
                        <li>Integrity</li>
                        <li>Excellence</li>
                        <li>Inclusivity</li>
                        <li>Collaboration</li>
                    </ul>
                </div>
                <div className="right-column">
                    <h3>Vision</h3>
                    <p>
                        Our vision is to be a leader in higher education by empowering students to achieve their goals
                        and make a positive impact in their communities.
                    </p>
                    <img 
                        src="/path-to-vision-image.jpg" 
                        alt="Vision" 
                        className="about-image"
                    />
                    <blockquote>
                        "Education is the most powerful weapon which you can use to change the world."
                        <footer>- Nelson Mandela</footer>
                    </blockquote>
                    <h3>Our Campus</h3>
                    <p>
                        Our state-of-the-art campus includes modern classrooms, research labs, libraries, and recreational facilities.
                        It provides an inspiring environment for students to learn and grow.
                    </p>
                    <img 
                        src="/path-to-campus-image.jpg" 
                        alt="Campus" 
                        className="about-image"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
