import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useUser } from '../context/UserContext';
import './Profile.css';
import DefaultUserImage from './user2.jpeg';

const Profile = () => {
    const { user, loginUser } = useUser();
    const [editing, setEditing] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(user?.email || '');
    const [address, setAddress] = useState(user?.address || '');
    const [age, setAge] = useState(user?.age || '');
    const [gender, setGender] = useState(user?.gender || '');

    useEffect(() => {
        if (user) {
            console.log("User after update:", user); // Debugging line
            setUsername(user.username || '');
            setEmail(user.email || '');
            setAddress(user.address || '');
            setAge(user.age || '');
            setGender(user.gender || '');
        }
    }, [user]);

    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const formData = new FormData();
            formData.append('profilePicture', file);

            try {
                // const response = await axios.post('http://localhost:5002/api/auth/uploadProfilePicture', formData, {
                    const response = await axios.post(`${window.location.origin}/api/auth/uploadProfilePicture`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Authorization: `Bearer ${user.token}`,
                    },
                });

                const updatedUser = response.data;
                console.log('Updated User after upload:', updatedUser); // Debugging line

                loginUser(updatedUser); // Update the user context with the new user data

            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
    };

    const handleImageDelete = async () => {
        try {
            // const response = await axios.delete('http://localhost:5002/api/auth/deleteProfilePicture', {
            const response = await axios.delete(`${window.location.origin}/api/auth/deleteProfilePicture`, {
                headers: {
                    Authorization: `Bearer ${user.token}`,
                },
            });
    
            const updatedUser = response.data.user;
            loginUser(updatedUser); // Update the user context with the new data
        } catch (error) {
            console.error('Error deleting image:', error);
        }
    };
    

    const handleEditToggle = () => {
        setEditing(!editing);
    };

    const handleSave = () => {
        loginUser({
            ...user,
            username,
            email,
            address,
            age,
            gender,
        });
        setEditing(false);
    };

    return (
        <div className="profile-container">
            <div className="profile-card">
                <div className="profile-header">
                    <h1>User Profile</h1>
                </div>
                <div className="profile-image-section">
                    <img
                        src={user?.profilePicture || DefaultUserImage}
                        alt="User"
                        className="profile-image"
                    />
                    <div className="profile-image-controls">
                        <label htmlFor="imageUpload" className="upload-label">
                            Replace
                        </label>
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="file-input"
                        />
                        {user?.profilePicture && user.profilePicture !== DefaultUserImage && (
                            <button
                                onClick={handleImageDelete}
                                className="delete-button"
                            >
                                Remove
                            </button>
                        )}
                    </div>
                </div>
                <div className="user-info">
                    {editing ? (
                        <div className="edit-section">
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className="input-field"
                                placeholder="Username"
                            />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="input-field"
                                placeholder="Email"
                            />
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="input-field"
                                placeholder="Address"
                            />
                            <input
                                type="number"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="input-field"
                                placeholder="Age"
                            />
                            <select
                                value={gender}
                                onChange={(e) => setGender(e.target.value)}
                                className="input-field"
                            >
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="button-group">
                                <button
                                    onClick={handleSave}
                                    className="save-button"
                                >
                                    Save
                                </button>
                                <button
                                    onClick={handleEditToggle}
                                    className="cancel-button"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="info-section">
                            <h2 className="info-label">Username: <span>{username}</span></h2>
                            <p className="info-label">Email: <span>{email}</span></p>
                            <p className="info-label">Address: <span>{address}</span></p>
                            <p className="info-label">Age: <span>{age}</span></p>
                            <p className="info-label">Gender: <span>{gender}</span></p>
                            <button
                                onClick={handleEditToggle}
                                className="edit-button"
                            >
                                Edit Profile
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
