import { handleActions } from "redux-actions";
import reduceReducers from "reduce-reducers";
import produce from "immer";

const initialState = {
  show: false,
  currentConversationId: null,
  conversations: [
    {
      id: 0,
      name: "Conversation 0",
      description: "testy description 0",
      unlocked: true,
      characterId: 1,
      dependencies: [],
      done: false,
    },
    {
      id: 1,
      name: "Conversation 1",
      description: "testy description 1",
      unlocked: true,
      characterId: 1,
      dependencies: [],
      done: false,
    },
    {
      id: 2,
      name: "Conversation 2",
      description: "testy description 2",
      unlocked: true,
      characterId: 1,
      dependencies: [0, 1], // Conversation 0 and 1 must be done before 2 is accessible. So a like a conversation stream
      done: false,
    },
    {
      id: 3,
      name: "Conversation 3",
      description: "testy description 3",
      unlocked: false,
      characterId: 1,
      dependencies: [],
      done: false,
    },
    {
      id: 4,
      name: "Conversation 4",
      description: "testy description 4",
      unlocked: false,
      characterId: 1,
      dependencies: [],
      done: false,
    },
    {
      id: 5,
      name: "Conversation 5",
      description: "testy description 5",
      unlocked: false,
      characterId: 1,
      dependencies: [],
      done: false,
    },
    {
      id: 6,
      name: "Conversation 6",
      description: "testy description 6",
      unlocked: true,
      characterId: 0,
      dependencies: [],
      done: false,
    },
  ],
};

// const otherReducer = handleActions({
//   ACTION_NAME: produce((state, action) => {
//     state.something = action.payload;
//   })
// }, initialState);

const conversationsReducer = handleActions(
  {
    SET_CURRENT_CONVERSATION_ID: produce((state, { payload }) => {
      state.currentConversationId = payload;
    }),
    SET_CONVERSATIONS_SHOW: produce((state, { payload }) => {
      state.show = payload;
    }),
  },
  initialState
);

// export default reduceReducers(conversationsReducer, otherReducer, someOtherReducer);
export default reduceReducers(conversationsReducer);
