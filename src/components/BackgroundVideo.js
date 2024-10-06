// BackgroundVideo.js
import React from 'react';
import './BackgroundVideo.css'; // Your CSS for styling

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted poster="/bg-mov.jpg">
        <source src="/bg-mov.mp4" type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
};

export default BackgroundVideo;