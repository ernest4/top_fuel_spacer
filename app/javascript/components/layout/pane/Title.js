import React from "react";
import Spacing from "../Spacing";
import Text from "../Text";

const Title = ({ title, subtitles, icon, ...props }) => {
  return (
    <Spacing horizontal {...{ ...props }}>
      <Text small>
        <Text primary medium bold uppercase children={title} />
        {subtitles && subtitles.length !== 0 && (
          <>
            <Spacing top={0.5} />
            <Subtitles {...{ subtitles }} />
          </>
        )}
      </Text>
      {icon}
    </Spacing>
  );
};

export default Title;

const Subtitles = ({ subtitles }) => {
  return subtitles.map((subtitle, key) => {
    return (
      <>
        <Text bold extraSmall secondary children={subtitle} />
        {key < subtitles.length - 1 && (
          <>
            {" "}
            <Text extraSmall light secondary children="|" />{" "}
          </>
        )}
      </>
    );
  });
};
