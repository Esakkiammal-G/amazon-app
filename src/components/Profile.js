import React from 'react';

const Profile = () => {
  return (
    <section id="profile">
    <section className="profile-section">
      <div className="profile-container">
        <div className="profile-image-container">
          <img
            src="profile.jpg" 
            alt="Esakkiammal G"
            className="profile-image"
          />
        </div>
        <div className="profile-text">
          <h2>Hello!</h2>
          <p>
            I am a dedicated and ambitious Computer Science Engineering student with 
            strong analytical and problem-solving skills. I have a solid foundation 
            in programming and web development, and I'm passionate about creating 
            innovative solutions that improve user experience. I thrive in collaborative
            environments and continuously seek opportunities to learn and grow in the
            field of technology.
          </p>
        </div>
      </div>
    </section>
    </section>
  );
};

export default Profile;
