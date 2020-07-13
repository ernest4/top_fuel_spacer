import React, { memo } from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import useTheme from "../../../hooks/useTheme";
import { css } from "styled-components";

const Head = ({ antFarm }) => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          width: antFarm ? "100%" : `${6 * SPACING}px`,
          height: "100%",
          background: "#b9c8d4",
          border: antFarm ? `2px solid ${black}` : `1px solid ${black}`,
          boxShadow: antFarm
            ? `100px -1px 0px -1px ${black} inset`
            : `10px -1px 0px -1px ${black} inset`,
          css: antFarm
            ? css`
                border-right: 2px solid ${white};
              `
            : css`
                border-right: 1px solid ${white};
              `,
          borderRadius: "100px 0px 0px 0px",
        }}
      />
      <Spacing
        {...{
          width: antFarm ? "100%" : `${6 * SPACING}px`,
          height: "100%",
          background: "#e5ecf0",
          border: antFarm ? `2px solid ${white}` : `1px solid ${white}`,
          boxShadow: antFarm
            ? `-100px -1px 0px -1px ${white} inset`
            : `-10px -1px 0px -1px ${white} inset`,
          css: antFarm
            ? css`
                border-left: 2px solid ${black};
              `
            : css`
                border-left: 1px solid ${black};
              `,
          borderRadius: "0px 100px 0px 0px",
        }}
      />
    </Spacing>
  );
};

export default memo(Head);
