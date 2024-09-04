// src/components/UserEducation.js

import React from 'react';
import './UserEducation.css';

const UserEducation = () => {
    return (
        <div className="user-education-container">
            <h1>User Education</h1>
            <div className="education-content">
                <div className="education-card">
                    <h2>Legal Rights and Procedures</h2>
                    <p>Understanding your legal rights is crucial when dealing with traffic violations. Here’s a brief overview:</p>
                    <ul>
                        <li><strong>Right to Remain Silent:</strong> You are not obligated to answer questions that may incriminate you. It's advisable to politely inform the officer that you choose to remain silent.</li>
                        <li><strong>Right to Contest a Ticket:</strong> You have the right to contest a traffic ticket in court. Make sure to gather evidence and be prepared to present your case.</li>
                        <li><strong>Right to Legal Representation:</strong> If you are facing serious charges, you have the right to hire an attorney to represent you and guide you through the legal process.</li>
                        <li><strong>Procedure for DUI/DWI:</strong> In case of a DUI/DWI charge, follow the procedures for testing, arrest, and court appearances. Seek legal advice to understand the potential consequences and legal options.</li>
                    </ul>
                </div>
                <div className="education-card">
                    <h2>FAQs on Common Traffic Violations</h2>
                    <p>Here are answers to some frequently asked questions regarding traffic violations:</p>
                    <ul>
                        <li><strong>What should I do if I receive a speeding ticket?</strong> Review the ticket for accuracy, check the speed limits in the area, and decide if you want to pay the fine or contest it in court.</li>
                        <li><strong>How can I avoid points on my driving record?</strong> In some jurisdictions, attending a defensive driving course can help reduce or eliminate points from your record.</li>
                        <li><strong>What happens if I don't pay a traffic ticket?</strong> Failure to pay a traffic ticket can lead to additional fines, license suspension, or even a warrant for your arrest.</li>
                        <li><strong>Can I appeal a traffic violation?</strong> Yes, you can appeal a traffic violation by filing a notice of appeal within the time limit specified on your ticket or by contacting the court.</li>
                    </ul>
                </div>
                <div className="education-card">
                    <h2>Understanding Your Responsibilities</h2>
                    <p>As a responsible driver, it's important to understand and adhere to the following guidelines:</p>
                    <ul>
                        <li><strong>Obey Traffic Signals and Signs:</strong> Always follow traffic signals and signs to ensure your safety and the safety of others on the road.</li>
                        <li><strong>Maintain a Safe Speed:</strong> Adhere to posted speed limits and adjust your speed according to road conditions and traffic flow.</li>
                        <li><strong>Use Seatbelts:</strong> Ensure that all passengers are wearing seatbelts at all times to reduce the risk of injury in case of an accident.</li>
                        <li><strong>Do Not Use Your Phone:</strong> Avoid using your phone while driving. If you need to make a call or send a message, pull over safely before doing so.</li>
                        <li><strong>Regular Vehicle Maintenance:</strong> Keep your vehicle well-maintained to prevent breakdowns and ensure it meets safety standards.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserEducation;
