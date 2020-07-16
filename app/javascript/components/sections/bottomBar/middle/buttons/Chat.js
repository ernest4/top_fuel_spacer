import React from "react";
import Button from "../../../../misc/Button";
import { useDispatch, useSelector } from "react-redux";
import { setConversationsShow } from "../../../../store/actions/conversations";

const Chat = () => {
  const dispatch = useDispatch();

  const conversationsShow = useSelector(state => state.conversations.show);

  const onToggle = () => dispatch(setConversationsShow(!conversationsShow));

  return (
    <Button secondary {...{ hover: conversationsShow, children: "chat", onClick: onToggle }} />
  );
};

export default Chat;
