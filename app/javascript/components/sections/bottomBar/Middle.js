import React from "react";
import Spacing from "../../layout/Spacing";
import CharacterSection from "./middle/CharacterSection";
import ButtonSection from "./middle/ButtonSection";

const Middle = () => {
  return (
    <Spacing horizontal {...{ justify: "flex-start", align: "flex-end" }}>
      <CharacterSection />
      <ButtonSection />
    </Spacing>
  );
};

export default Middle;
