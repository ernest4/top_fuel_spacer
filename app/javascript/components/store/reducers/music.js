import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

// NOTE: keep data as flat and normalized as possible. Since deep updates require new copies of
// objects along the way, any components listening along the update path will need to rerender...
// Also normalization is just more efficent as eveyrything is once source of truth.
export const initialState = {
  dock: false,
  currentSongId: 0,
  duration: 0,
  currentTime: 0,
  skipTime: 0,
  finished: false,
  playing: false,
  volume: 4,
  // NOTE: position in array is implicit id. Like a rown in a DB table.
  songs: [
    {
      id: 0,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "We Are Already Dead (instrumental)",
      src: "music/We_Are_Already_Dead_(instrumental).mp3",
    },
    {
      id: 1,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "Lappel du vide",
      src: "music/Lappel_du_vide.mp3",
    },
    {
      id: 2,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "Democide",
      src: "music/Democide.mp3",
    },
    {
      id: 3,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "Artifice",
      src: "music/Artifice.mp3",
    },
    {
      id: 4,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "Panthalassa",
      src: "music/Panthalassa.mp3",
    },
    {
      id: 5,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "The Author Never Dies (instrumental)",
      src: "music/The_Author_Never_Dies_(instrumental).mp3",
    },
    {
      id: 6,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "In the Belly of the Whale",
      src: "music/In_the_Belly_of_the_Whale.mp3",
    },
    {
      id: 7,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "Motion Blur",
      src: "music/Motion_Blur.mp3",
    },
    {
      id: 8,
      artist: "Nihilore",
      credit: "Music by Nihilore. More at http://www.nihilore.com/",
      title: "Absolute Terror",
      src: "music/Absolute_Terror.mp3",
    },
  ],
  // allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8], // NOTE: this is not necessary, since [0..songs.length] can give you same info
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const musicReducer = handleActions(
  {
    SET_CURRENT_SONG_ID: produce((state, { payload }) => {
      state.currentSongId = payload;
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
      state.duration = payload;
    }),
    SET_CURRENT_TIME: produce((state, { payload }) => {
      state.currentTime = payload;
    }),
    SET_SKIP_TIME: produce((state, { payload }) => {
      state.skipTime = payload;
    }),
    SET_FINISHED: produce((state, { payload }) => {
      state.finished = payload;
    }),
  },
  initialState
);

// export default reduceReducers(gameReducer, otherReducer, someOtherReducer);
export default reduceReducers(musicReducer);
