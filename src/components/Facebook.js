import React, { useState } from 'react';
import profiles from '../data/berlin.json';

function FaceBook() {
  const firstThreeProfiles = profiles.slice(0, 3);
  const [userCountry, setUserCountry] = useState(''); 

  
  const profileCountries = [...new Set(profiles.map((profile) => profile.country))];

  return (
    <div>
      <div className='country-btns'>
        {profileCountries.map((country) => (
          <button type='button' onClick={() => setUserCountry(country)} key={Math.random() * 1000}>
            {country}
          </button>
        ))}
      </div>
      {firstThreeProfiles.map((profile, index) => (
        <div key={index} className={userCountry === profile.country ? 'blue-container' : 'container'}>
          <img src={profile.img} className="user-image" alt="user-card" />

          <div className="card-info">
            <p>First Name: {profile.firstName}</p>
            <p>Last Name: {profile.lastName}</p>
            <p>Location: {profile.country}</p>
            <p>Type: {profile.isStudent ? 'Student' : 'Non-student'}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FaceBook;

