export const getMinuteSeconds = time => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.round(time - minutes * 60);

  return { minutes, seconds };
};

export const formatTime = ({ minutes, seconds }) => {
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};
