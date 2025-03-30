import React from 'react';

import { FaTiktok } from 'react-icons/fa';

import "../../../src/app/globals.css"

const TikTokButton = () => {
  const tiktokUrl = 'https://www.tiktok.com/@earthtones.sound'; // Replace with your Instagram URL

  return (
    <a href={tiktokUrl} target="_blank" rel="noopener noreferrer" className="footer-buttons">
      <FaTiktok
        size={36}
        color="#EBE4D6"
      />
    </a>
  );
};

export default TikTokButton;