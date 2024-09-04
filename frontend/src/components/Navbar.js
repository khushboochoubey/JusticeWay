import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import './Navbar.css';
import Logo from './i2.png';
import DefaultUserImage from './user2.jpeg';

const Navbar = () => {
    const { user, logoutUser } = useUser();
    const navigate = useNavigate();
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const handleLogout = () => {
        logoutUser();
        navigate('/login');
    };

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
        setDropdownOpen(false);
    }, [user]);

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/" className="navbar-logo-link">
                    <img src={Logo} alt="Logo" className="navbar-logo-image" />
                </Link>
            </div>
            <ul className="navbar-list">
                <li><Link to="/" className="navbar-item">Home</Link></li>
                {user ? (
                    <>
                        <li><Link to="/user-education" className="navbar-item">User Education</Link></li>
                        <li className="navbar-item-right">
                            <div className="user-profile" onClick={toggleDropdown}>
                                <img 
                                    src={user.profilePicture || DefaultUserImage} 
                                    alt="User" 
                                    className="user-image" 
                                />
                            </div>
                            {dropdownOpen && (
                                <ul className="dropdown-menu">
                                    <li><Link to="/profile" className="dropdown-item">Profile</Link></li>
                                    <li><Link to="/dashboard" className="dropdown-item">Dashboard</Link></li>
                                    <li>
                                        <button onClick={handleLogout} className="dropdown-item logout-button">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            )}
                        </li>
                    </>
                ) : (
                    <>
                        <li className="navbar-item-right">
                            <Link to="/login" className="navbar-item">Login</Link>
                        </li>
                        <li className="navbar-item-right">
                            <Link to="/register" className="navbar-item">Register</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navbar;
