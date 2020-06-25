import React from "react";
import Spacing from "../../layout/Spacing";

const Middle = () => {
  const controls = ["test1", "test2", "test3", "close"];

  return (
    <Spacing>
      <CharacterSection />
      <Spacing horizontal>
        {controls.map(control => {
          return <Spacing>{control}</Spacing>;
        })}
      </Spacing>
    </Spacing>
  );
};

export default Middle;

const CharacterSection = () => {
  return (
    <Spacing vertical>
      <Spacing horizontal>
        {" "}
        {/* upper section */}
        <Spacing>section rect</Spacing>
        <Spacing>character</Spacing>
      </Spacing>
      <Spacing> section rect</Spacing> {/* lower section */}
    </Spacing>
  );
};
