import React, { memo } from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import useTheme from "../../../hooks/useTheme";
import { css } from "styled-components";

const StabilizerFins = () => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteLeft: "69px",
          borderRadius: "150% 0px 0px 5px",
          background: black,
          border: "1px solid #45afe4",
          height: "37px",
          width: "7px",
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
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteRight: "69px",
          borderRadius: "0px 150% 5px 0px",
          background: "#e5ecf0",
          border: "1px solid #d57544",
          borderWidth: "1px 1px 1px 0px",
          height: "37px",
          width: "8px",
        }}
      />
    </Spacing>
  );
};

export default memo(StabilizerFins);
