import React, { memo } from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import useTheme from "../../../hooks/useTheme";
import { css } from "styled-components";

const Head = ({ antFarm, hover }) => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%", hover }}>
      <Spacing
        {...{
          height: "100%",
          background: "#b9c8d4",
          borderRadius: "100px 0px 0px 0px",
          ...getProps({ antFarm, black, white }),
        }}
      />
      <Spacing
        {...{
          height: "100%",
          background: "#e5ecf0",
          borderRadius: "0px 100px 0px 0px",
          ...getProps({ right: true, antFarm, black, white }),
        }}
      />
    </Spacing>
  );
};

export default memo(Head);

const getProps = ({ right, antFarm, black, white }) => {
  const color1 = right ? white : black;
  const color2 = right ? black : white;

  let props = {
    width: `${6 * SPACING}px`,
    border: `1px solid ${color1}`,
    boxShadow: `${right ? "-" : ""}10px -1px 0px -1px ${color1} inset`,
    css: css`
      border-${right ? "left" : "right"}: 1px solid ${color2};
    `,
  };

  if (antFarm)
    props = {
      width: "100%",
      border: `2px solid ${color1}`,
      boxShadow: `${right ? "-" : ""}100px -1px 0px -1px ${color1} inset`,
      css: css`
        border-${right ? "left" : "right"}: 2px solid ${color2};
      `,
    };

  return props;
};
