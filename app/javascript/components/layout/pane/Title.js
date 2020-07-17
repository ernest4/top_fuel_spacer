import React from "react";
import Spacing from "../Spacing";
import Text from "../Text";

const Title = ({ title, subtitles, icon, primary, ...props }) => {
  return (
    <Spacing horizontal {...{ ...props }}>
      <Text small>
        <Text primary medium bold uppercase children={title} />
        {subtitles && subtitles.length !== 0 && (
          <>
            <Spacing top={0.5} />
            <Subtitles {...{ primary, subtitles }} />
          </>
        )}
      </Text>
      {icon}
    </Spacing>
  );
};

export default Title;

const Subtitles = ({ primary, subtitles }) => {
  return subtitles.map((subtitle, key) => {
    return (
      <Text key={key}>
        <Text bold extraSmall secondary children={subtitle} primary={primary} />
        {key < subtitles.length - 1 && (
          <>
            <Text extraSmall children=" " />
            <Text extraSmall light secondary children="|" primary={primary} />
            <Text extraSmall children=" " />
          </>
        )}
      </Text>
    );
  });
};
