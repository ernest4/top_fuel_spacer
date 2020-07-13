import React from "react";
import Spacing from "../../layout/Spacing";
import { setCurrentSectionId } from "../../store/actions/antFarm";
import { useDispatch, useSelector } from "react-redux";
import sectionComponents from "./sections/index";
import { toPascalCase } from "../../utils/String";
import useTheme from "../../hooks/useTheme";

const Section = ({ sectionId }) => {
  const dispatch = useDispatch();

  const { black } = useTheme();

  const name = useSelector(state => state.antFarm.sections[sectionId]?.name);
  const unlocked = useSelector(state => state.antFarm.sections[sectionId]?.unlocked);

  const onSectionClick = () => dispatch(setCurrentSectionId(sectionId));

  if (!unlocked) return null;

  return (
    <Spacing
      pointer
      {...{
        width: "100%",
        height: "300px",
        onClick: onSectionClick,
        children: sectionComponents[toPascalCase(name)],
        border: `8px solid ${black}`,
        borderWidth: "0px 0px 8px 0px",
      }}
    />
  );
};

export default Section;
