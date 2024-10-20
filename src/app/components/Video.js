// components/YouTubeVideo.js
import React from 'react';
import "../global.css";

const YouTubeVideo = ({ videoId }) => {
  return (
    <div className="video-container">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&loop=1&playlist=${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default YouTubeVideo;
