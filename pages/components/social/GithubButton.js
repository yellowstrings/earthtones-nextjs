import React from 'react';

import { FaGithub } from 'react-icons/fa';

import "../../../src/app/globals.css"


const GithubButton = () => {
  const githubUrl = 'https://github.com/yellowstrings'; // Replace with your Instagram URL

  return (
    <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="footerButtons">
      <FaGithub
        size={36}
        color="#DED2BA"
      />
    </a>
  );
};

export default GithubButton;