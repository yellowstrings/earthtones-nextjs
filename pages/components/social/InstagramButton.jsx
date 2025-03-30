import React from 'react';

import { FaInstagram } from 'react-icons/fa';

import "../../../src/app/globals.css"


const InstagramButton = () => {
  const instagramUrl = 'https://www.instagram.com/earthtones.sound'; // Replace with your Instagram URL

  return (
    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="footer-buttons">
      <FaInstagram
        size={36}
        color="#EBE4D6"
      />
    </a>
  );
};

export default InstagramButton;
