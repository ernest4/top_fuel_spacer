import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import useTheme from "../../../hooks/useTheme";
import { css } from "styled-components";
import Particles from "./Particles";

const Shaft = ({ steam }) => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      {steam && (
        <Spacing
          {...{
            position: "absolute",
            absoluteTop: steam === 1 ? "39vh" : "49vh",
            width: "16px",
            height: "16px",
            z: 1,
            children: <Particles steam angle={-45} duration={2} />,
          }}
        />
      )}
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
    </Spacing>
  );
};

export default Shaft;
