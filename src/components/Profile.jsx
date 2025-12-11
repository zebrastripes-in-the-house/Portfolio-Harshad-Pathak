import React from 'react';
import BentoItem from './BentoItem';

const Profile = () => {
  return (
    <BentoItem colSpan={2} rowSpan={2} className="profile-section">
      <div className="profile-content">
        <h2>Harshad Pathak</h2>
        <p>Creative Developer & Designer</p>
        {/* Placeholder for banner image if needed, or just styled background */}
      </div>
    </BentoItem>
  );
};

export default Profile;
