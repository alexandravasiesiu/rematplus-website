import React from "react";

const Video = () => {
  
  const src = "/video/rematplus_video.mp4";

  return (
    <>
    <section className="pb-20 bg-white flex justify-center">
      <video src={src} controls autoplay="true" muted className="rounded-lg shadow-md border-green-600 border-4 w-2/3">
        Sorry, your browser doesn't support embedded videos.
      </video>
      </section>
    </>
  );
};

export default Video;