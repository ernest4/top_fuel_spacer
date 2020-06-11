import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Game from "./Game";

const Root = ({ ...props }) => {
  return (
    <Provider store={store}>
      <Game {...props} />
    </Provider>
  );
};

export default Root;
