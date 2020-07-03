import React, { useState } from "react";
import Spacing from "../../../layout/Spacing";
import Beam from "../rocket/Beam";
import { css } from "styled-components";

const Booster = ({ right }) => {
  // TESTING, will come from redux
  const [liftOff, setLiftOff] = useState(false);
  const [detach, setDetach] = useState(false);

  const testy = () => {
    if (liftOff) setDetach(true);
    else setLiftOff(true);
  };

  return (
    <Spacing
      {...{
        onClick: testy,
        background: right ? "aqua" : "teal",
        position: "fixed",
        absoluteLeft: right ? "212px" : "126px",
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
