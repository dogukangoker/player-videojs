import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/fantasy/index.css";
import "../styles/customStyle.scss";

const VideoJS = ({ options }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  useEffect(() => {
    const player = playerRef.current;
    if (!player) {
      const videoElement = videoRef.current;
      if (!videoElement) return;
      playerRef.current = videojs(videoElement, options);
    }
    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [options, videoRef, playerRef]);
  return (
    <video
      ref={videoRef}
      className={`video-js vjs-show-big-play-button-on-pause vjs-big-play-centered vjs-theme-fantasy  `}
      controls
    ></video>
  );
};
export default VideoJS;
