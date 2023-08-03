import React from 'react';

const LocalVideo = () => {
  return (
    <div>
      <video width="100%" height="100%" autoplay="autoplay" muted="muted">
            <source src={process.env.PUBLIC_URL + '/Videos/videoplayback.mp4'} type="video/mp4" />
      </video>
    </div>
  );
};

export default LocalVideo;