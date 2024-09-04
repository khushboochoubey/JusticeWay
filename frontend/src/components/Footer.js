import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Phone: <a href="tel:+1234567890" className="footer-link">+123-456-7890</a></p>
                    <p>Email: <a href="mailto:contact@website.com" className="footer-link">contact@website.com</a></p>
                </div>
                <div className="footer-section">
                    <h3>Follow Us</h3>
                    <p>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">Facebook</a> |
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">Twitter</a> |
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-link">Instagram</a>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Quick Links</h3>
                    <p>
                        <a href="/about" className="footer-link">About Us</a> |
                        <a href="/privacy" className="footer-link">Privacy Policy</a> |
                        <a href="/terms" className="footer-link">Terms of Service</a>
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} CurruptionFree. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
