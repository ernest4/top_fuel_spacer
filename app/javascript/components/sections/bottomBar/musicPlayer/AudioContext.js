import React, { useRef } from "react";
import { useSelector } from "react-redux";

const AudioContext = () => {
  const audioRef = useRef(null);
  const src = useSelector(state => state.music.currentSong.src);

  // instigate our audio context
  // for cross browser
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  // const track = audioCtx.createMediaElementSource(audioElement);

  return <audio {...{ src: `music/${src}`, ref: audioRef, crossOrigin: "anonymous" }} />;
};

export default AudioContext;
