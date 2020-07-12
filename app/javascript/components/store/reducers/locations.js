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
  return { type: "planet", name: `planet_${Math.random()}`, distanceToRocket: distance - 0 };
};

const generateSatelite = ({ distance, contactRange }) => {
  return { type: "satelite", name: `satelite_${Math.random()}`, distanceToRocket: distance - 25 };
};

const generateStation = ({ distance, contactRange }) => {
  return { type: "station", name: `station_${Math.random()}`, distanceToRocket: distance - 50 };
};

const generateMeteor = ({ distance, contactRange }) => {
  return { type: "meteor", name: `meteor_${Math.random()}`, distanceToRocket: distance - 75 };
};

const GENERATORS = [generatePlanet, generateSatelite, generateStation, generateMeteor];

const generateItinerary = ({ count, ...params }) => {
  return Array.from(Array(count))
    .map(() => getRandom(GENERATORS)({ count, ...params }))
    .sort((a, b) => a.distanceToRocket - b.distanceToRocket);
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
      state.locations = [...generateItinerary(payload), ...state.locations.slice(0, 4)];
    }),
  },
  initialState
);

// export default reduceReducers(locationsReducer, otherReducer, someOtherReducer);
export default reduceReducers(locationsReducer);
