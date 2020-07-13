import React from "react";
import Text from "../Text";

const Footer = ({ text }) => {
  return <Text extraSmall muted italics children={`"${text}"`} />;
};

export default Footer;
