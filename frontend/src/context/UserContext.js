import React, { createContext, useState, useEffect, useContext } from 'react';
//import DefaultUserImage from './path/to/default/image.jpg'; // Update with the correct path

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const loginUser = (userData) => {
        console.log('Updating user:', userData); // Debugging line
        const updatedUser = {
            ...userData,
            profilePicture: userData.profilePicture, // Use backend-provided URL or default image
        };
        
        setUser(updatedUser);
        localStorage.setItem('user', JSON.stringify(updatedUser)); // Store the updated user data including the new profile picture URL
        localStorage.setItem('authToken', userData.token || ''); // Store token in local storage
    };

    const logoutUser = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
    };

    return (
        <UserContext.Provider value={{ user, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => useContext(UserContext);
