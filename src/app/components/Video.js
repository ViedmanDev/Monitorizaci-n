  // components/YouTubeVideo.js
  import React from 'react';
  import "../global.css"


  const YouTubeVideo = ({videoId}) => {
    return (
      <div className="video-container">
        <iframe   
          src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&loop=1`} 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
          </iframe>
      </div>
    );
  };

  export default YouTubeVideo; 
