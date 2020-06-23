import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as musicActions from "../../../store/actions/music";

// instigate our audio context
// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const gainNode = audioContext.createGain();

// TODO: process (compress) and add the other songs!!
// TODO: autoplaye next song
const AudioSource = () => {
  const dispatch = useDispatch();

  const audioRef = useRef(null);
  const [track, setTrack] = useState();

  const src = useSelector(state => state.music.currentSong.src);
  const playing = useSelector(state => state.music.playing);
  const volume = useSelector(state => state.music.volume);
  // const currentTime = useSelector(state => state.music.currentSong.currentTime);
  const skipTime = useSelector(state => state.music.currentSong.skipTime);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      setTrack(audioContext.createMediaElementSource(audioRef.current));

      audioRef.current.ontimeupdate = ({ target: { currentTime: newCurrentTime } }) => {
        dispatch(musicActions.setCurrentTime(newCurrentTime));
      };

      const audioRefCurrent = audioRef.current;

      return () => (audioRefCurrent.ontimeupdate = null);

      // dispatch(musicActions.setDuration(audioRef.current.duration));

      // TODO: not working...?!?!
      // const endedCallback = () => {
      //   console.log("song finished");
      // };

      // audioRef.current.addEventListener("ended", endedCallback, false);

      // return audioRef.current.removeEventListener("ended", endedCallback);
    }
  }, [audioRef, dispatch]);

  useEffect(() => {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") audioContext.resume();

    // debugger

    dispatch(musicActions.setDuration(audioRef.current.duration));

    if (playing) audioRef.current.play();
    else audioRef.current.pause();
  }, [playing, dispatch]);

  useEffect(() => {
    gainNode.gain.value = volume / 10;
  }, [volume]);

  useEffect(() => {
    if (track) track.connect(gainNode).connect(audioContext.destination);
  }, [track]);

  useEffect(() => {
    if (audioRef && audioRef.current) audioRef.current.currentTime = skipTime;
  }, [skipTime, audioRef]);

  return <audio controls {...{ src: `music/${src}`, ref: audioRef, crossOrigin: "anonymous" }} />;
};

export default AudioSource;
