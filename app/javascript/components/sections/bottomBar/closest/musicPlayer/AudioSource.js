import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as musicActions from "../../../../store/actions/music";

// instigate our audio context
// for cross browser
const AudioContext = window.AudioContext || window.webkitAudioContext;
const audioContext = new AudioContext();
const gainNode = audioContext.createGain();

const AudioSource = () => {
  const dispatch = useDispatch();

  const audioRef = useRef(null);
  const [track, setTrack] = useState();

  const basic = useSelector(state => state.settings.graphics.musicPlayer.basic);

  const currentSongId = useSelector(state => state.music.currentSongId);
  const src = useSelector(state => state.music.songs[currentSongId]?.src);
  const playing = useSelector(state => state.music.playing);
  const volume = useSelector(state => state.music.volume);
  const skipTime = useSelector(state => state.music.skipTime);
  const duration = useSelector(state => state.music.duration);
  const currentTime = useSelector(state => state.music.currentTime);

  useEffect(() => {
    if (audioRef && audioRef.current) {
      setTrack(audioContext.createMediaElementSource(audioRef.current));

      audioRef.current.ontimeupdate = ({ target: { currentTime: newCurrentTime } }) => {
        dispatch(musicActions.setCurrentTime(newCurrentTime));
      };

      const audioRefCurrent = audioRef.current;

      return () => (audioRefCurrent.ontimeupdate = null);
    }
  }, [audioRef, dispatch]);

  useEffect(() => {
    // check if context is in suspended state (autoplay policy)
    if (audioContext.state === "suspended") audioContext.resume();

    const playPause = async () => {
      try {
        if (playing) await audioRef.current.play();
        else audioRef.current.pause();

        dispatch(musicActions.setDuration(audioRef.current.duration));
      } catch (error) {
        console.error(error);

        if (isPermissionError(error.message)) alert(AUDIO_PERMISSIONS_STRING);
      }
    };

    playPause();
  }, [playing, dispatch, currentSongId]);

  useEffect(() => {
    gainNode.gain.value = volume / 10;
  }, [volume]);

  useEffect(() => {
    if (track) track.connect(gainNode).connect(audioContext.destination);
  }, [track]);

  useEffect(() => {
    if (audioRef && audioRef.current) audioRef.current.currentTime = skipTime;
  }, [skipTime, audioRef]);

  useEffect(() => {
    if (duration && currentTime) {
      dispatch(musicActions.setFinished(Math.round(currentTime) === Math.round(duration)));
    }
  }, [duration, dispatch, currentTime]);

  return <audio {...{ src, ref: audioRef, crossOrigin: "anonymous", controls: basic }} />;
};

export default AudioSource;

const isPermissionError = error => {
  return (
    error.includes("NotAllowedError") ||
    error.includes("denied permission") ||
    error.includes("not allowed")
  );
};

const AUDIO_PERMISSIONS_STRING = `It appears that the game does not have permission to play audio!
 
For best experience we recommend enabling web audio.
 
For Safar, enable audio by opening "Safari" -> "Preferences ..."

Then navigate to the "Websites" tab.

In the Websites tab, on the right you will see the "Currently Open Websites" section.

Find this game in the list and on the right side, there should be a dropdown with the currently selected option set to "Stop Media With Sound" or "Never Auto-Play".

Click the drop down button, and select the "Allow All Auto-Play" option.

Finally, restart the web page for chances to take effect.
`;
