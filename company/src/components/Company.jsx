import React from 'react';

import '../styles/Company.css'
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';

const Company = () => {
    return (
        <div>
            <Header/>
            <main>
                <Home/>
                <About/>
                <Services/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    );
};

export default Company;
