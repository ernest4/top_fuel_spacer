import React from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import { useSelector } from "react-redux";
import Text from "../../../layout/Text";
import Card from "../../../layout/Card";

const Player = () => {
  const secondary = useSelector(state => state.theme.theme.color.secondary);
  const background = useSelector(state => state.theme.theme.color.closest);

  // TODO: onclick, take to player stats / player creations

  return (
    <Spacing
      center
      {...{
        width: `${14 * SPACING}px`,
        height: `${14 * SPACING}px`,
        borderRadius: "100%",
        background,
        position: "fixed",
        absoluteBottom: `${3 * SPACING}px`,
        absoluteLeft: `${1 * SPACING}px`,
      }}
    >
      <Spacing
        center
        pointer
        {...{
          width: `${12 * SPACING}px`,
          height: `${12 * SPACING}px`,
          borderRadius: "100%",
          background: "transparent",
          border: `6px solid ${secondary}`,
          children: <div>player</div>,
          hover: <Hover />,
        }}
      />
    </Spacing>
  );
};

export default Player;

const Hover = () => {
  const name = useSelector(state => state.player.name);
  const avatar = useSelector(state => state.player.avatar);

  return (
    <Card
      border
      {...{
        header: { title: name },
        body: (
          <Text extraSmall>
            This is you <Text secondary extraSmall bold children={name} />! Or rather the virtual
            representation of you.
            {!avatar && (
              <Text extraSmall>
                <Spacing top={1} />
                Looks like your avatar is still unfinished. Why not customize it now?
              </Text>
            )}
          </Text>
        ),
        footer: avatar ? null : (
          <Text extraSmall muted italics children={`"Looking a bit blank there friend."`} />
        ),
      }}
    />
  );
};
