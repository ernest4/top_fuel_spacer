import React, { memo } from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import useTheme from "../../../hooks/useTheme";
import { css } from "styled-components";
import Particles from "./Particles";

const Shaft = ({ steam, antFarm }) => {
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
            children: <Particles steam {...{ angle: -45, duration: 2, count: 8, length: 2 }} />,
          }}
        />
      )}
      <Spacing
        {...{ height: `100%`, background: "#b9c8d4", ...getProps({ antFarm, black, white }) }}
      />
      <Spacing
        {...{
          height: `100%`,
          background: "#e5ecf0",
          ...getProps({ right: true, antFarm, black, white }),
        }}
      />
    </Spacing>
  );
};

export default memo(Shaft);

const getProps = ({ right, antFarm, black, white }) => {
  const color1 = right ? white : black;
  const color2 = right ? black : white;

  let props = {
    width: `${6 * SPACING}px`,
    border: `1px solid ${color1}`,
    boxShadow: `${right ? "-" : ""}10px -1px 0px -1px ${color1} inset`,
    css: right
      ? css`
          border-left: 1px solid ${color2};
        `
      : css`
          border-right: 1px solid ${color2};
          border-top: 1px solid #b9c8d4;
        `,
  };

  if (antFarm)
    props = {
      width: "100%",
      border: `1px solid ${color1}`,
      boxShadow: `${right ? "-" : ""}100px -1px 0px -1px ${color1} inset`,
      css: right
        ? css`
            border-left: 2px solid ${color2};
          `
        : css`
            border-right: 2px solid ${color2};
            border-top: 2px solid #b9c8d4;
          `,
    };

  return props;
};
