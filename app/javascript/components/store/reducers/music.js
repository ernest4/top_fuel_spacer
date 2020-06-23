import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  dock: false,
  currentSong: {
    artist: "Nihilore",
    title: "We Are Already Dead (instrumental)",
    src: "We_Are_Already_Dead_(instrumental).mp3",
    position: 0,
    duration: 0,
    currentTime: 0,
    skipTime: 0,
  },
  playing: false,
  volume: 4,
  songs: [
    {
      artist: "Nihilore",
      title: "We Are Already Dead (instrumental)",
      filename: "We_Are_Already_Dead_(instrumental).mp3",
      position: 0,
    },
    {
      artist: "Nihilore",
      title: "Lappel du vide",
      filename: "Lappel_du_vide.mp3",
      position: 1,
    },
    {
      artist: "Nihilore",
      title: "Democide",
      filename: "Democide.mp3",
      position: 2,
    },
    {
      artist: "Nihilore",
      title: "Artifice",
      filename: "Artifice.mp3",
      position: 3,
    },
    {
      artist: "Nihilore",
      title: "Panthalassa",
      filename: "Panthalassa.mp3",
      position: 4,
    },
    {
      artist: "Nihilore",
      title: "The Author Never Dies (instrumental)",
      filename: "The_Author_Never_Dies_(instrumental).mp3",
      position: 5,
    },
    {
      artist: "Nihilore",
      title: "In the Belly of the Whale",
      filename: "In_the_Belly_of_the_Whale.mp3",
      position: 6,
    },
    {
      artist: "Nihilore",
      title: "Motion Blur",
      filename: "Motion_Blur.mp3",
      position: 7,
    },
    {
      artist: "Nihilore",
      title: "Absolute Terror",
      filename: "Absolute_Terror.mp3",
      position: 8,
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
    SET_VOLUME: produce((state, { payload }) => {
      state.volume = payload;
    }),
    SET_PLAYING: produce((state, { payload }) => {
      state.playing = payload;
    }),
    SET_DURATION: produce((state, { payload }) => {
      state.currentSong.duration = payload;
    }),
    SET_CURRENT_TIME: produce((state, { payload }) => {
      state.currentSong.currentTime = payload;
    }),
    SET_SKIP_TIME: produce((state, { payload }) => {
      state.currentSong.skipTime = payload;
    }),
  },
  initialState
);

// export default reduceReducers(gameReducer, otherReducer, someOtherReducer);
export default reduceReducers(musicReducer);
