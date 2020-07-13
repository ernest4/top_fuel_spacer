import React from "react";
import Text from "../Text";

const Body = ({ text }) => {
  return <Text extraSmall>{text}</Text>;
};

export default Body;

// You accumulate <Text danger extraSmall bold children="renegade points" /> when interacting
//       with others in a <Text danger extraSmall bold children="threatening, apathetic, ruthless" />{" "}
//       way. Infamy will make the smaller pirates fear you. However, larger sharks will have you on
//       their radar!
//       <Spacing top={1} />
//       You accumulate <Text secondary extraSmall bold children="paragon points" /> when{" "}
//       <Text secondary extraSmall bold children="helping" /> others,{" "}
//       <Text secondary extraSmall bold children="sympathizing" /> and choosing{" "}
//       <Text secondary extraSmall bold children="diplomacy" /> over fighting. Renown will make you a
//       target to all pirates who want to make a name for themselves! However, trading outpost will
//       give you more favourable rates!
