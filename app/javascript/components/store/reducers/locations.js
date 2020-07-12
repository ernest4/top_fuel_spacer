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

const generatePlanet = ({ distance, contactRange }) => {
  const distanceToRocket = distance + contactRange * 0.0;

  return { type: "planet", name: `planet_${distanceToRocket}`, distanceToRocket };
};

const generateSatelite = ({ distance, contactRange }) => {
  const distanceToRocket = distance + contactRange * 0.25;

  return { type: "satelite", name: `satelite_${distanceToRocket}`, distanceToRocket };
};

const generateStation = ({ distance, contactRange }) => {
  const distanceToRocket = distance + contactRange * 0.5;

  return { type: "station", name: `station_${distanceToRocket}`, distanceToRocket };
};

const generateMeteor = ({ distance, contactRange }) => {
  const distanceToRocket = distance + contactRange * 0.75;

  return { type: "meteor", name: `meteor_${distanceToRocket}`, distanceToRocket };
};

const GENERATORS = [generatePlanet, generateSatelite, generateStation, generateMeteor];

const generateItinerary = ({ count, ...params }) => {
  return Array.from(Array(count))
    .map(() => getRandom(GENERATORS)({ count, ...params }))
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
