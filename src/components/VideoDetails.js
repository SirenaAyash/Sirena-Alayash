

import React from "react";

const Details = ({ video }) => {
  if (!video) {
    return <div>
       <h1>Enter what's going in your mind ;)</h1>
       <br></br>
       <p style={{fontSize:'25px'}}>
      Feel free to use this website to search for anything you want from youtube...
      Enjoy and have fun....
       </p>
    </div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(typeof video);
  return (
    <div>
      <div className="embed">
        <iframe src={videoSrc} allowFullScreen title="Video player" />
      </div>
      <div className="segment">
        <h4 className="header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default Details;