import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

// instigate our audio context
// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const gainNode = audioContext.createGain();
var frameCount = audioContext.sampleRate * 2.0;
const myArrayBuffer = audioContext.createBuffer(2, frameCount, audioContext.sampleRate);

const AudioSource = () => {
  const audioRef = useRef(null);
  const [track, setTrack] = useState();

  const src = useSelector(state => state.music.currentSong.src);
  const playing = useSelector(state => state.music.playing);
  const volume = useSelector(state => state.music.volume);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      setTrack(audioContext.createMediaElementSource(audioRef.current));

      // TODO: not working...?!?!
      // const endedCallback = () => {
      //   console.log("song finished");
      // };

      // audioRef.current.addEventListener("ended", endedCallback, false);

      // return audioRef.current.removeEventListener("ended", endedCallback);
    }
  }, [audioRef]);

  useEffect(() => {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") audioContext.resume();

    if (playing) audioRef.current.play();
    else audioRef.current.pause();
  }, [playing]);

  useEffect(() => {
    gainNode.gain.value = volume / 10;
  }, [volume]);

  useEffect(() => {
    if (track) track.connect(gainNode).connect(audioContext.destination);
  }, [track]);


  // TODO: use this value to both read and write to the song timeline
  // solution !!!
  // document.getElementById("audio item").currentTime = 100;

  // also if getting the 'ended' callback is not gonna work, can use this value to see if song over!

  return <audio controls {...{ src: `music/${src}`, ref: audioRef, crossOrigin: "anonymous" }} />;
};

export default AudioSource;
