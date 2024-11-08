// Profile.js
import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';

const Profile = () => {
    const { profile } = useContext(ProfileContext);

    if (!profile) {
        return null;
    }

    return (
        <div style={{ padding: '10px', marginTop: '20px', maxWidth: '300px', margin: '0 auto', backgroundColor: '#f1f1f1', borderRadius: '5px' }}>
            <h3>Profile</h3>
            <p><strong>Full Name:</strong> {`${profile.firstName} ${profile.middleName} ${profile.lastName}`}</p>
            <p><strong>Email:</strong> {profile.email || "N/A"}</p>
        </div>
    );
};

export default Profile;
