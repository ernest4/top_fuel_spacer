export const getRandom = items => items[Math.round(Math.random() * (items.length - 1))];

// cached, precomputed randome numbers
export const RANDOM_NUMBERS = Array.from(Array(1000)).map(() => Math.random());
