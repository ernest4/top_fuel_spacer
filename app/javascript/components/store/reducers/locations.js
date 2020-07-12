import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";
import { getRandom } from "../../utils/Array";

// const PLANETS = [
//   { name: "planet", distanceToRocket: 0 },
//   { name: "satelite", distanceToRocket: 25 },
//   { name: "station", distanceToRocket: 50 },
//   { name: "meteor", distanceToRocket: 75 },
// ];

const generatePlanet = ({ index, count, distance, contactRange }) => {
  const distanceToRocket = distance + contactRange * (index / count);

  return { type: "planet", name: `planet_${Math.round(distanceToRocket)}`, distanceToRocket };
};

const generateSatelite = ({ index, count, distance, contactRange }) => {
  const distanceToRocket = distance + contactRange * (index / count);

  return { type: "satelite", name: `satelite_${Math.round(distanceToRocket)}`, distanceToRocket };
};

const generateStation = ({ index, count, distance, contactRange }) => {
  const distanceToRocket = distance + contactRange * (index / count);

  return { type: "station", name: `station_${Math.round(distanceToRocket)}`, distanceToRocket };
};

const generateMeteor = ({ index, count, distance, contactRange }) => {
  const distanceToRocket = distance + contactRange * (index / count);

  return { type: "meteor", name: `meteor_${Math.round(distanceToRocket)}`, distanceToRocket };
};

const GENERATORS = [generatePlanet, generateSatelite, generateStation, generateMeteor];

const generateItinerary = ({ count, ...params }) => {
  return Array.from(Array(count))
    .map((_, index) => getRandom(GENERATORS)({ index, count, ...params }))
    .sort((a, b) => b.distanceToRocket - a.distanceToRocket);
};

const initialState = {
  currentLocationId: null,
  locations: [],
};

const locationsReducer = handleActions(
  {
    SET_CURRENT_LOCATION_ID: produce((state, { payload }) => {
      state.currentLocationId = payload;
    }),
    GENERATE_NEXT_LOCATIONS: produce((state, { payload }) => {
      // state.locations = [...generateItinerary(payload), ...state.locations.slice(0, 4)];
      state.locations = [...generateItinerary(payload)];
    }),
  },
  initialState
);

// export default reduceReducers(locationsReducer, otherReducer, someOtherReducer);
export default reduceReducers(locationsReducer);
