import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import './Collage.css';

const Collage = () => {
    return (
        <div className="Collage">
            <Header />
            <Main />
            <Footer />
        </div>
    );
};

export default Collage;
