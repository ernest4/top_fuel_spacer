export const getRandom = items => items[Math.round(Math.random() * (items.length - 1))];

export const nextIndex = ({ array, currentIndex }) => {
  return currentIndex + 1 < array.length ? currentIndex + 1 : 0;
};

// cached, precomputed randome numbers
export const RANDOM_NUMBERS = Array.from(Array(1000)).map(() => Math.random());
