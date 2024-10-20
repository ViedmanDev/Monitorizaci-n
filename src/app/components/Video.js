// components/YouTubeVideo.js
import React from 'react';
import "../global.css";

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&rel=0`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default YouTubeVideo;
