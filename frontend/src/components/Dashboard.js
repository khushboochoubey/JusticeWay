// src/components/Dashboard.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <h1>Welcome to the Dashboard</h1>
            <div className="dashboard-links">
                <Link to="/user-education" className="dashboard-link">User Education</Link>
                <Link to="/document-storage" className="dashboard-link">Document Storage</Link>
                <Link to="/report-corruption" className="dashboard-link">Report Corruption</Link>
               
            </div>
        </div>
    );
};

export default Dashboard;
