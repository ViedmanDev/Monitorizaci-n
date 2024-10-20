// components/YouTubeVideo.js
import React from 'react';

const YouTubeVideo = ({videoId}) => {
  return (
    <div >
      <iframe 
        width="400" 
        height="250" 
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1`} 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen>

        </iframe>
    </div>
  );
};

export default YouTubeVideo;
