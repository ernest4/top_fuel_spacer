import { handleActions } from "redux-actions";
import produce from "immer";

// TODO: abandon. use redux debug tools!
const createDebugReducer = initialState =>
  handleActions(
    {
      SET_STATE: produce((state, { payload: { path, value } }) => {
        // eval(`state.${path} = ${value};`);

        // debugger
        // const keys = path.split(".").slice(1);
        // const keysLength = keys.length;

        // let stateSlice;

        // keys.forEach((key, index) => {
        //   if (index == keysLength) stateSlice[key] = value;
        //   else stateSlice = state[key];
        // });
      }),
    },
    initialState
  );

export default createDebugReducer;
