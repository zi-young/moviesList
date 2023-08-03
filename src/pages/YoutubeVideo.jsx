// import React from 'react';

// const YoutubeVideo = ({ videoId }) => {
//     return (
//       <div>
//         <iframe
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${videoId}`}
//           title="YouTube video player"
//           frameBorder="0"
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         ></iframe>
//       </div>
//     );
//   };
  
// export default YoutubeVideo;


import React from 'react';

const YoutubeVideo = ({ videoUrl }) => {
  const getYoutubeVideoIdFromUrl = (url) => {
    let videoId = "";

    if (url.indexOf("youtube.com/watch?v=") !== -1) {
      videoId = url.split("youtube.com/watch?v=")[1];
    } else if (url.indexOf("youtu.be/") !== -1) {
      videoId = url.split("youtu.be/")[1];
    }

    if (videoId.indexOf("&") !== -1) {
      videoId = videoId.substring(0, videoId.indexOf("&"));
    }

    return videoId;
  };

  const videoId = getYoutubeVideoIdFromUrl(videoUrl);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeVideo;