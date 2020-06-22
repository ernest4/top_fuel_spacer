import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// instigate our audio context
// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioCtx = new AudioContext();

const AudioSource = () => {
  const audioRef = useRef(null);
  const [track, setTrack] = useState();

  const src = useSelector(state => state.music.currentSong.src);
  const playing = useSelector(state => state.music.playing);

  // const track = audioCtx.createMediaElementSource(audioElement);

  useEffect(() => {
    if (audioRef && audioRef.current) setTrack(audioCtx.createMediaElementSource(audioRef.current));
  }, [audioRef]);

  useEffect(() => {
    // check if context is in suspended state (autoplay policy)
    if (audioCtx.state === "suspended") audioCtx.resume();

    if (playing) audioRef.current.play();
    else audioRef.current.pause();
  }, [playing]);

  useEffect(() => {
    if (track) track.connect(audioCtx.destination);
  }, [track]);

  return <audio controls {...{ src: `music/${src}`, ref: audioRef, crossOrigin: "anonymous" }} />;
};

export default AudioSource;
