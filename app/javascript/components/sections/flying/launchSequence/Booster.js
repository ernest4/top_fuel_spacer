import React, { useState } from "react";
import Spacing from "../../../layout/Spacing";
import Beam from "../rocket/Beam";
import { css } from "styled-components";
import { useSelector } from "react-redux";

const Booster = ({ right }) => {
  const currentStageId = useSelector(state => state.launchSequence.currentStageId);
  const name = useSelector(state => state.launchSequence.stages[currentStageId]?.name);
  // TESTING, will come from redux
  // const [liftOff, setLiftOff] = useState(false);
  // const [detach, setDetach] = useState(false);

  // const testy = () => {
  //   if (liftOff) setDetach(true);
  //   else setLiftOff(true);
  // };

  const liftOff = name === "lift off";
  const detach = name === "boosters detach";

  // TODO: remove this from DOM on last stage
  return (
    <Spacing
      {...{
        // onClick: testy,
        background: right ? "aqua" : "teal",
        position: "fixed",
        absoluteLeft: right ? "17.25vw" : "11vw",
        absoluteBottom: "39vh",
        height: "40vh",
        width: "4vw",
        borderRadius: "100px 100px 0px 0px",
        transform: detach
          ? `translate(${right ? "" : "-"}30vw, 100vh) rotate(${right ? "" : "-"}90deg)`
          : "",
        transformOrigin: "bottom right",
        transition: "transform 5s",
      }}
    >
      <Beam
        {...{
          background: "#fec200",
          intensityRatio: 0.5,
          absoluteTop: "100%",
          height: "100%",
          transition: "opacity 6s cubic-bezier(.74,.07,1,-0.19)",
          css: liftOff
            ? css`
                opacity: 0;
              `
            : "",
        }}
      />
    </Spacing>
  );
};

export default Booster;
