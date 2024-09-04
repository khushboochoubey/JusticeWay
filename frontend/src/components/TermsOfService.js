import React from 'react';
import './TermsOfService.css';

const TermsOfService = () => {
    return (
        <div className="terms-of-service">
            <div className="terms-header">
                <h1>Terms of Service</h1>
            </div>
            <div className="terms-content">
                <p>
                    By using our services, you agree to comply with our Terms of Service. These terms outline the rules and regulations for using our website and services. Please read them carefully.
                </p>
                <p>
                    You are responsible for your use of our services and for any content you post. You agree not to engage in any illegal activities or post content that is harmful, offensive, or violates the rights of others.
                </p>
                <p>
                    We reserve the right to terminate or suspend your account if you violate these terms. We may also modify these terms at any time, and we will notify you of any significant changes.
                </p>
                <p>
                    For more information, please read the full Terms of Service document.
                </p>
            </div>
        </div>
    );
};

export default TermsOfService;
