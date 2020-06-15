import React from "react";
import Spacing from "./Spacing";

const Container = ({ children }) => {
  const {
    theme: {
      color: { secondary },
    },
  } = useSelector(state => state.theme);

  return (
    <Spacing
      {...{
        background: "transparent",
        padding: "4px",
        borderRadius: `5px 20px 5px 20px`,
        border: `2px solid ${secondary}`,
        opacity: "0.9",
      }}
    >
      <Spacing {...{ background: secondary, borderRadius: `2px 15px 2px 15px`, children }} />
    </Spacing>
  );
};

export default Container;

// // outer
// background: transparent;
// padding: 4px;
// border-radius: 5px 20px 5px 20px;
// border: 2px solid green;
// opacity: 0.9;

//     // inner
//     background: #009688;
//     border-radius: 2px 15px 2px 15px;
