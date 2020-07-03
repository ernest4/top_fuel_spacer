import React from "react";
import Spacing from "../../../layout/Spacing";

const LaunchSound = () => {
  return (
    <Spacing position="fixed">
      {/* take it out of DOM flow as it's meant to be 'invisible' */}
      {/* <AudioSource sound id={"wip"} /> */}
    </Spacing>
  );
};

export default LaunchSound;
