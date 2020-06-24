export const getMinuteSeconds = time => {
  let minutes = validate(Math.floor(time / 60));
  let seconds = validate(Math.round(time - minutes * 60));

  return { minutes, seconds };
};

export const formatTime = ({ minutes, seconds }) => {
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

const validate = n => (isNaN(n) ? 0 : n);
