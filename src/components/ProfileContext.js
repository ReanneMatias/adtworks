// ProfileContext.js
import React, { createContext, useState } from 'react';

export const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
    const [profile, setProfile] = useState({
        firstName: 'Reanne',
        middleName: 'Ashley',
        lastName: 'Matias',
        section: 'BSIT 3B',
        email: 'reanne.matias@example.com', // Add email or any other fields if needed
    });

    return (
        <ProfileContext.Provider value={{ profile, setProfile }}>
            {children}
        </ProfileContext.Provider>
    );
};



