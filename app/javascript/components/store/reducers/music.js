import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  docked: true,
  dock: false,
  currentSong: {
    artist: "Nihilore",
    title: "We Are Already Dead (instrumental)",
    filename: "We_Are_Already_Dead_(instrumental).mp3",
  },
  songs: [
    // TODO: populate the full list here
    {
      artist: "Nihilore",
      title: "We Are Already Dead (instrumental)",
      filename: "We_Are_Already_Dead_(instrumental).mp3",
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
    SET_DOCKED: produce((state, { payload }) => {
      state.docked = payload;
    }),
    SET_DOCK: produce((state, { payload }) => {
      state.docked = payload;
    }),
  },
  initialState
);

// export default reduceReducers(gameReducer, otherReducer, someOtherReducer);
export default reduceReducers(musicReducer);
