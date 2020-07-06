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

const generatePlanet = () => {
  return { type: "planet", name: "planet1", distanceToRocket: 0 };
};

const generateSatelite = () => {
  return { type: "satelite", name: "satelite1", distanceToRocket: 25 };
};

const generateStation = () => {
  return { type: "station", name: "station1", distanceToRocket: 50 };
};

const generateMeteor = () => {
  return { type: "meteor", name: "meteor1", distanceToRocket: 75 };
};

const GENERATORS = [generatePlanet, generateSatelite, generateStation, generateMeteor];

const generateItinerary = count => Array.from(Array(count || 4)).map(() => getRandom(GENERATORS)());

const initialState = {
  currentLocationId: null,
  locations: generateItinerary(),
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const locationsReducer = handleActions(
  {
    SET_CURRENT_LOCATION_ID: produce((state, { payload }) => {
      state.currentLocationId = payload;
    }),
    GENERATE_NEXT_LOCATIONS: produce((state, { payload }) => {
      state.locations = [...generateItinerary(payload), ...state.locations];
    }),
  },
  initialState
);

// export default reduceReducers(locationsReducer, otherReducer, someOtherReducer);
export default reduceReducers(locationsReducer);
