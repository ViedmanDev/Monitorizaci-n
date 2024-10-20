  // components/YouTubeVideo.js
  import React from 'react';
  import "../global.css"


  const YouTubeVideo = ({videoId}) => {
    return (
      <div className="video-container">
        <iframe   
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&modestbranding=1&showinfo=0&loop=1&playlist=${videoId}`} 
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
