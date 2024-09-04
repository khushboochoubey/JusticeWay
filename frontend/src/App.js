// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserEducation from './components/UserEducation';
import DocumentStorage from './components/DocumentStorage';
import ReportCorruption from './components/ReportCorruption';
import DetailPage from './components/DetailPage';
import AboutUs from './components/AboutUs';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Profile from './components/Profile';
import './components/Auth.css';
import { UserProvider } from './context/UserContext';

function App() {
    return (
        <UserProvider>
            <Router>
                <Header />
                <Navbar />
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/user-education" element={<UserEducation />} />
                        <Route path="/document-storage" element={<DocumentStorage />} />
                        <Route path="/report-corruption" element={<ReportCorruption />} />
                        <Route path="/detail/:id" element={<DetailPage />} />
                        <Route path="/about" element={<AboutUs />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/terms" element={<TermsOfService />} />
                        
                    </Routes>
                </div>
                <Footer />
            </Router>
        </UserProvider>
    );
}

export default App;
