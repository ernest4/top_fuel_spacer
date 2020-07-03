import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// NOTE: keep data as flat and normalized as possible. Since deep updates require new copies of
// objects along the way, any components listening along the update path will need to rerender...
// Also normalization is just more efficent as eveyrything is once source of truth.
const initialState = {
  currentSoundId: 0,
  duration: 0,
  currentTime: 0,
  finished: false,
  playing: false,
  volume: 4,
  // NOTE: position in array is implicit id. Like a rown in a DB table.
  sounds: [
    {
      id: 0,
      artist: "Paul368",
      credit: "https://freesound.org/people/Paul368/sounds/201899/",
      title: "Starship Rail Gun",
      src: "sounds/launch_sequence.mp3",
    },
  ],
  // allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8], // NOTE: this is not necessary, since [0..sounds.length] can give you same info
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const musicReducer = handleActions(
  {
    SET_CURRENT_SOUND_ID: produce((state, { payload }) => {
      state.currentSoundId = payload;
    }),
    SET_VOLUME: produce((state, { payload }) => {
      state.volume = payload;
    }),
    SET_PLAYING: produce((state, { payload }) => {
      state.playing = payload;
    }),
    SET_DURATION: produce((state, { payload }) => {
      state.duration = payload;
    }),
    SET_CURRENT_TIME: produce((state, { payload }) => {
      state.currentTime = payload;
    }),
    SET_FINISHED: produce((state, { payload }) => {
      state.finished = payload;
    }),
  },
  initialState
);

// export default reduceReducers(gameReducer, otherReducer, someOtherReducer);
export default reduceReducers(musicReducer);
