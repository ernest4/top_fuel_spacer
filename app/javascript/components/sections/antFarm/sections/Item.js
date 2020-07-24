import React from "react";
import Card from "../../../layout/Card";
import { useSelector } from "react-redux";
import { css } from "styled-components";

const Item = ({ sectionId }) => {
  const name = useSelector(state => state.antFarm.sections[sectionId]?.name);
  const hover = useSelector(state => state.antFarm.sections[sectionId]?.hover);

  return (
    <Card
      {...{
        hover: <Card border {...hover} />,
        header: {
          title: name,
          subtitles: [],
        },
        body: <div>top current task (wip)</div>,
        footer: <div>extra info here (wip)</div>,
        css: css`
          border-radius: 4px;
        `,
      }}
    />
  );
};

export default Item;
