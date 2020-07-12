import React from "react";
import Spacing from "../../layout/Spacing";
import { setCurrentSectionId } from "../../store/actions/antFarm";
import { useDispatch, useSelector } from "react-redux";
import { generateHSLA } from "../../utils/Color";

const Section = ({ sectionId }) => {
  const dispatch = useDispatch();
  const section = useSelector(state => state.antFarm.sections[sectionId]);

  return (
    <Spacing
      pointer
      {...{
        background: generateHSLA({ alpha: 1 }),
        width: "100%",
        height: "25vh",
        onClick: () => dispatch(setCurrentSectionId(sectionId)),
      }}
    >
      {section.name}
    </Spacing>
  );
};

export default Section;
