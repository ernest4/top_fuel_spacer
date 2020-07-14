import React from "react";
import { useDispatch } from "react-redux";
import { setCurrentPageId } from "../../../../store/actions/info";
import Button from "../../../../misc/Button";

const PageButton = ({ pageId, ...props }) => {
  const dispatch = useDispatch();

  const onClick = () => dispatch(setCurrentPageId(pageId));

  return <Button {...{ onClick, ...props }} />;
};

export default PageButton;
