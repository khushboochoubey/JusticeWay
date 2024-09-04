import React from 'react';
import './AboutUs.css';
import aboutImage from './i7.jpeg'; // Ensure you have an image in your project directory

const AboutUs = () => {
    return (
        <div className="about-us">
            <div className="about-header">
                <h1>About Us</h1>
            </div>
            <div className="about-content">
                <img src={aboutImage} alt="About Us" className="about-image" />
                <p>
                    Welcome to our project, which is dedicated to addressing and preventing cyber harassment. Our mission is to create a safer online environment by providing advanced tools and resources for detecting and reporting inappropriate behavior. With a team of experts in cybersecurity, we aim to empower individuals to protect themselves from online threats and ensure a safer digital space for everyone.
                </p>
                <p>
                    We believe in the power of technology to bring positive change, and our project is a testament to this belief. By utilizing the latest in machine learning and artificial intelligence, we are developing systems that can automatically detect harmful content and take appropriate action, all while respecting users' privacy and freedom of expression.
                </p>
                <p>
                    Our team is passionate about making the internet a safer place, and we are committed to continuous innovation in the field of cyber safety. Thank you for supporting our mission.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
