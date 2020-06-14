import React, { useRef, useState } from "react";
import Spacing from "./layout/Spacing";
import Text from "./layout/Text";
import Draggable from "./layout/Draggable";

// TODO: add debug overlay controls
const Debug = () => {
  return (
    <Draggable useButton background="#f1f1f1" width="50%">
      <Spacing background="#2196F3">
        <Text>Debug Controls</Text>
      </Spacing>
      <Text>WIP (this is a draggable div!)</Text>
      <Text>
        WIP add controls to game state here: expose the entire game state dynamically and generate
        value fields for it
      </Text>
    </Draggable>
  );
};

export default Debug;
