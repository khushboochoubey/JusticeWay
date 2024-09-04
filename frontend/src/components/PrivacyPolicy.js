import React from 'react';
import './PrivacyPolicy.css';

const PrivacyPolicy = () => {
    return (
        <div className="privacy-policy">
            <div className="privacy-header">
                <h1>Privacy Policy</h1>
            </div>
            <div className="privacy-content">
                <p>
                    Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our services. We are committed to ensuring that your data is handled securely and in accordance with applicable privacy laws.
                </p>
                <p>
                    We collect information that you provide to us directly, such as when you create an account, post content, or contact us for support. We may also collect information about your use of our services, including your IP address, browser type, and interaction with our website.
                </p>
                <p>
                    We use your information to provide, maintain, and improve our services, as well as to protect our users from harmful content. We do not sell your personal information to third parties.
                </p>
                <p>
                    For more details on our privacy practices, please read the full Privacy Policy document.
                </p>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
