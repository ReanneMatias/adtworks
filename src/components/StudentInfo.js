// StudentInfo.js
import React, { useContext } from 'react';
import { ProfileContext } from './ProfileContext';

const StudentInfo = () => {
    const { profile } = useContext(ProfileContext);

    return (
        <div style={{ textAlign: 'center', marginBottom: '20px' }}>
            <h2>Student Information</h2>
            <p>First Name: {profile.firstName || "N/A"}</p>
            <p>Middle Name: {profile.middleName || "N/A"}</p>
            <p>Last Name: {profile.lastName || "N/A"}</p>
            <p>Section: {profile.section || "N/A"}</p>
        </div>
    );
};

export default StudentInfo;



