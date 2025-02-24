import React from 'react';
import About from '../About/About';
import Courses from '../Courses/Courses';
import Contact from '../Contact/Contact';
import './Main.css';

const Main = () => {
    return (
        <main className="main">
            <header className="main-header">
                <h2>Welcome to Our College!</h2>
               
            </header>
            <section className="main-content">
                <About />
                <Courses />
            </section>
            <Contact />
        </main>
    );
};

export default Main;
