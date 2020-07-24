import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  currentSectionId: null,
  sections: [
    {
      id: 0,
      name: "head",
      component: "head",
      characterId: null,
      levelRequired: 0,
      buttons: ["Settings", "Info", "Credits", "Development"],
      hover: {
        header: { title: "Misc" },
        body: "You can access miscellaneous <s>options</s> and <p>settings</p> here. <space />",
        footer: "Lots of dials and knobs.",
      },
    },
    {
      id: 1,
      name: "comms",
      component: "item",
      characterId: 0,
      levelRequired: 2000000,
      buttons: ["Chat", "Contact", "Tasks", "Collectibles"],
      hover: {
        header: { title: "Comms", subtitles: ["work in progress (wip)"] },
        body: "This is your communications hub. (wip)",
        footer: `This is Ground Control to Commander. You've really made the grade`,
      },
    },
    {
      id: 2,
      name: "command",
      component: "item",
      characterId: 1,
      levelRequired: 0,
      buttons: ["Chat", "Navigate", "Tasks", "Collectibles", "Achievements"],
      hover: {
        header: { title: "Command", subtitles: ["work in progress (wip)"] },
        body: "Command the ship from here commander! (wip)",
        footer: "Now that I have one piece I want the second one!",
      },
    },
    {
      id: 3,
      name: "main_entrance",
      component: "item",
      characterId: 2,
      levelRequired: 0,
      buttons: ["Chat", "WIP", "Tasks", "Collectibles"],
      hover: {
        header: { title: "Main Entrance", subtitles: ["work in progress (wip)"] },
        body:
          "The only way on or off the rocket. Your armed forces will make a stand against the pirates here! (wip)",
        footer: "In one door and out the...same door.",
      },
    },
    {
      id: 4,
      name: "engineering",
      component: "item",
      characterId: 6,
      levelRequired: 0,
      buttons: ["Chat", "Contact", "Tasks", "Collectibles"],
      hover: {
        header: { title: "Engineering", subtitles: ["work in progress (wip)"] },
        body: "Everything gets built here.",
        footer: "Uh oh, I’ve lost a screw...oh well.",
      },
    },
    {
      id: 5,
      name: "cargo",
      component: "item",
      characterId: 3,
      levelRequired: 3000000,
      buttons: ["Chat", "Inspect", "Tasks", "Collectibles"],
      hover: {
        header: { title: "Cargo", subtitles: ["work in progress (wip)"] },
        body:
          "All provisions, equipment and other stuff is kept here. Keep it safe from pirates! (wip)",
        footer: "This rat is packin'.",
      },
    },
    {
      id: 6,
      name: "barracks",
      component: "item",
      characterId: 4,
      levelRequired: 4000000,
      buttons: ["Chat", "Orders", "Tasks", "Collectibles"],
      hover: {
        header: { title: "Barracks", subtitles: ["work in progress (wip)"] },
        body: "Your soldiers are stationed and train here. (wip)",
        footer: "Teeeeen-hut!",
      },
    },
    {
      id: 7,
      name: "life_support",
      component: "item",
      characterId: 5,
      levelRequired: 5000000,
      buttons: ["Chat", "Grow", "Tasks", "Collectibles"],
      hover: {
        header: { title: "Life Support", subtitles: ["work in progress (wip)"] },
        body:
          "This is your garden of Eden. Keeps everyone alive with fresh air and a micro ecosystem. (wip)",
        footer: "(Snif) Ahhh! Smells just like home.",
      },
    },
    {
      id: 8,
      name: "shaft",
      component: "shaft",
      characterId: null,
      levelRequired: 0,
      buttons: [],
      hover: {},
    },
  ],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const antFarmReducer = handleActions(
  {
    SET_CURRENT_SECTION_ID: produce((state, { payload }) => {
      state.currentSectionId = payload;
    }),
  },
  initialState
);

// export default reduceReducers(antFarmReducer, otherReducer, someOtherReducer);
export default reduceReducers(antFarmReducer);
