export const round = (n, decimaPlaces) => {
  return Math.round((n + Number.EPSILON) * Math.pow(10, decimaPlaces)) / Math.pow(10, decimaPlaces);
};
