import React from 'react';

import { FaGithub } from 'react-icons/fa';

import "../../../src/app/globals.css"


const GithubButton = () => {
  const githubUrl = 'https://github.com/yellowstrings'; // Replace with your Instagram URL

  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="footer-buttons">
      <FaGithub
        size={36}
        color="#EBE4D6"
      />
    </a>
  );
};

export default GithubButton;