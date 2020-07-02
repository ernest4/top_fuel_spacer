import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import useTheme from "../../../hooks/useTheme";
import { css } from "styled-components";

const IonThrusters = () => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          // left thruster
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteLeft: "61px",
          absoluteBottom: "100px",
          borderRadius: "8px 0px 0px 4px",
          background: black,
          border: "2px solid #45afe4",
          height: "37px",
          width: "16px",
          transform: "skew(0deg, -45deg)",
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `10px -1px 0px -1px ${black} inset`,
          css: css`
            border-right: 1px solid ${white};
            border-top: 1px solid #b9c8d4;
          `,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${white}`,
          boxShadow: `-10px -1px 0px -1px ${white} inset`,
          css: css`
            border-left: 1px solid ${black};
          `,
        }}
      />
      <Spacing
        {...{
          // right thruster
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteRight: "61px",
          absoluteBottom: "100px",
          borderRadius: "0px 8px 4px 0px",
          background: "#e5ecf0",
          border: "1px solid #d57544",
          borderWidth: "2px 2px 2px 0px",
          height: "37px",
          width: "16px",
          transform: "skew(0deg, 45deg)",
        }}
      />
    </Spacing>
  );
};

export default IonThrusters;
