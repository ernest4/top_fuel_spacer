import React from "react";
import Button from "../../../../misc/Button";
import { useDispatch } from "react-redux";
import { setCurrentPageId } from "../../../../store/actions/info";

const Settings = () => {
  const dispatch = useDispatch();

  // TODO: can probs take the page id as prop. Create a parent button component that does this.
  // refactor the rest of the buttons in this section after !
  const onClick = () => dispatch(setCurrentPageId(0));

  return <Button primary {...{ children: "Settings", onClick }} />;
};

export default Settings;
