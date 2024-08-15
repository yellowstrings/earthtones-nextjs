import React from "react";
import PropTypes from "prop-types";

import "../../src/app/globals.css"


const YoutubeEmbed = () => (
  <div >
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/9rlfHRJWV9U"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
    >
    </iframe>
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;