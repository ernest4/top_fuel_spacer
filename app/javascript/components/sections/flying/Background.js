import React from "react";
import Spacing from "../../layout/Spacing";
import Back from "./background/Back";
import Middle from "./background/Middle";
import Front from "./background/Front";

// TODO: each of these backgrounds will scroll at different speeds.
// Using basic CSS animation.
// TODO: each of these backgrounds will load appropriate next item to
// display when flown past.
const Background = () => {
  return (
    <>
      <Back />
      {/* <Middle /> */}
      {/* <Front /> */}
    </>
  );
};

export default Background;
