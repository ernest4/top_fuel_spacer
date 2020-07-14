import React from "react";
import Text from "../Text";
import Spacing from "../Spacing";

const Body = ({ text }) => {
  return <Text extraSmall children={textToComponents({ text })} />;
};

export default Body;

const textToComponents = ({ text }) => {
  let tokens = text.split(/(<s>[a-zA-Z0-9]+<\/s>)|(<p>[a-zA-Z0-9]+<\/p>)|(<space \/>)/);
  tokens = tokens.filter(token => token); // Remove 'undefined'

  return tokens.map(token => componentize(token));
};

const componentize = string => {
  if (string.match(/^<p>([a-zA-Z0-9]+)<\/p>/)?.[1]) {
    return <Text primary extraSmall bold children={string} />;
  }

  if (string.match(/^<s>([a-zA-Z0-9]+)<\/s>/)?.[1]) {
    return <Text secondary extraSmall bold children={string} />;
  }

  if (string.match(/^(<space \/>)/)?.[1]) {
    return <Spacing top={1} />;
  }

  // TODO: if ... more

  // default, raw string
  return string;
};
