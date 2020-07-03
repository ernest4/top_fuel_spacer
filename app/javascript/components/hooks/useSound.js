import { useState, useEffect } from "react";

const useSound = ({ src, debugTime }) => {
  const [audio] = useState(new Audio(src));
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    if (!audio) return;

    const callback = () => setPlaying(false);

    audio.addEventListener("ended", callback);

    return () => audio.removeEventListener("ended", callback);
  }, [audio]);

  useEffect(() => {
    if (audio) {
      audio.ontimeupdate = ({ target: { currentTime: newCurrentTime } }) => {
        setCurrentTime(Math.floor(newCurrentTime));
      };

      return () => (audio.ontimeupdate = null);
    }
  }, [audio]);

  useEffect(() => {
    if (debugTime) console.log(`sound: currentTime: ${currentTime}`);
  }, [currentTime, debugTime]);

  return { playing, toggle, currentTime };
};

export default useSound;
