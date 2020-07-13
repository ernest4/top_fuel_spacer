import React from "react";
import Spacing from "../../layout/Spacing";
import { setCurrentSectionId } from "../../store/actions/antFarm";
import { useDispatch, useSelector } from "react-redux";
import sectionComponents from "./sections/index";
import { toPascalCase } from "../../utils/String";

const Section = ({ sectionId }) => {
  const dispatch = useDispatch();
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
      }}
    />
  );
};

export default Section;
