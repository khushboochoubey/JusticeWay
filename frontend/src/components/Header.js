import React from 'react';
import './Header.css';
import bannerImage from './i6.jpeg'; // Ensure this path is correct

const Header = () => {
    return (
        <header className="header">
            <div className="header-banner">
             
                <img src={bannerImage} alt="Banner" className="header-banner-image" />
            </div>
        </header>
    );
};

export default Header;
