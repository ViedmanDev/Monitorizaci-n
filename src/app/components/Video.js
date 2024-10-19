// components/YouTubeVideo.js
import React from 'react';

const YouTubeVideo = ({ videoId }) => {
  return (
    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/4VQpwptiEuE?si=SnwVOZhd98R2TMvD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

export default YouTubeVideo;
