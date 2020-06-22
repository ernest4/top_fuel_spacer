import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  dock: false,
  currentSong: {
    artist: "Nihilore",
    title: "We Are Already Dead (instrumental)",
    filename: "We_Are_Already_Dead_(instrumental).mp3",
    position: 0,
  },
  playing: false,
  songs: [
    // TODO: populate the full list here
    {
      artist: "Nihilore",
      title: "We Are Already Dead (instrumental)",
      filename: "We_Are_Already_Dead_(instrumental).mp3",
      position: 0,
    },
  ],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const musicReducer = handleActions(
  {
    SET_SONG: produce((state, { payload }) => {
      state.theme = songs[payload];
    }),
    SET_DOCK: produce((state, { payload }) => {
      state.dock = payload;
    }),
  },
  initialState
);

// export default reduceReducers(gameReducer, otherReducer, someOtherReducer);
export default reduceReducers(musicReducer);
