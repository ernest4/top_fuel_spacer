import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import Container from "../../layout/Container";
import { useSelector } from "react-redux";
import useTheme from "../../hooks/useTheme";
import { css } from "styled-components";
import Fire from "./rocket/Fire";
import Card from "../../layout/Card";
import Text from "../../layout/Text";

const Rocket = () => {
  // add energy to dynamo for ion thrusters https://en.wikipedia.org/wiki/Ion_thruster
  const onAddKineticEnergy = () => {}; // dispatch action adding kinteic energy / fuel / acceleration

  return (
    <Spacing
      pointer
      vertical
      {...{
        height: "33vh",
        // width: "fit-content",
        width: "38px",
        align: "center",
        background: "green",
        onClick: onAddKineticEnergy,
        borderRadius: "38px 38px 0px 0px",
        css: css`
          align-self: center;

          border-left: 2px solid #45afe4;
          border-right: 2px solid #e47a44;
        `,
        hover: <Hover />,
        hoverProps: { placement: "right" },
        z: 1,
      }}
    >
      <Head />
      <StabilizerFins />
      <Shaft />
      <IonThrusters />
      <Shaft />
      <Shaft />
      <MainThurster />
      <Fire />
    </Spacing>
  );
};

export default Rocket;

const Hover = () => {
  const name = useSelector(state => state.rocket.name);

  return (
    <Card
      border
      {...{
        header: {
          title: `"${name}"`,
          subtitles: ["wip ???"],
        },
        body: (
          <Text extraSmall>
            This is your pride and joy, the <Text primary extraSmall bold children={name} />.
            <Spacing top={1} />
            <Text secondary extraSmall bold children="Click" /> this rocket to spin up a generator
            to convert your kinetic energy to electricity that can be used in{" "}
            <Text primary extraSmall bold children="ion thrusters" /> for a temporary{" "}
            <Text secondary extraSmall bold children="speed boost" />.
          </Text>
        ),
        footer: <Text extraSmall muted italics children={`"All systems nominal."`} />,
      }}
    />
  );
};

const Head = () => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `10px -1px 0px -1px ${black} inset`,
          css: css`
            border-right: 1px solid ${white};
          `,
          borderRadius: "100px 0px 0px 0px",
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${white}`,
          boxShadow: `-10px -1px 0px -1px ${white} inset`,
          css: css`
            border-left: 1px solid ${black};
          `,
          borderRadius: "0px 100px 0px 0px",
        }}
      />
    </Spacing>
  );
};

const StabilizerFins = () => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteLeft: "69px",
          borderRadius: "150% 0px 0px 5px",
          background: black,
          border: "1px solid #45afe4",
          height: "37px",
          width: "7px",
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `10px -1px 0px -1px ${black} inset`,
          css: css`
            border-right: 1px solid ${white};
            border-top: 1px solid #b9c8d4;
          `,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${white}`,
          boxShadow: `-10px -1px 0px -1px ${white} inset`,
          css: css`
            border-left: 1px solid ${black};
          `,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteRight: "69px",
          borderRadius: "0px 150% 5px 0px",
          background: "#e5ecf0",
          border: "1px solid #d57544",
          borderWidth: "1px 1px 1px 0px",
          height: "37px",
          width: "8px",
        }}
      />
    </Spacing>
  );
};

const Shaft = () => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `10px -1px 0px -1px ${black} inset`,
          css: css`
            border-right: 1px solid ${white};
            border-top: 1px solid #b9c8d4;
          `,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${white}`,
          boxShadow: `-10px -1px 0px -1px ${white} inset`,
          css: css`
            border-left: 1px solid ${black};
          `,
        }}
      />
    </Spacing>
  );
};

const IonThrusters = () => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `10px -1px 0px -1px ${black} inset`,
          css: css`
            border-right: 1px solid ${white};
            border-top: 1px solid #b9c8d4;
          `,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${white}`,
          boxShadow: `-10px -1px 0px -1px ${white} inset`,
          css: css`
            border-left: 1px solid ${black};
          `,
        }}
      />
    </Spacing>
  );
};

const MainThurster = () => {
  const running = useSelector(state => state.game.running);
  const { black, white } = useTheme();

  const fireLightGradient = `linear-gradient(0deg, hsla(45, 100%, 71%, 1), transparent)`;
  const fireDarkGradient = `linear-gradient(0deg,hsla(45,100%,71%,1), transparent)`;

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          // left wing
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteLeft: "53px",
          borderRadius: "150% 0px 0px 5px",
          background: running ? fireDarkGradient.replace("transparent", black) : black,
          border: running ? "none" : "2px solid #45afe4",
          height: "37px",
          width: "24px",
          transform: "skew(0deg, -45deg)",
        }}
      />
      <Spacing
        {...{
          // left underside (main body)
          width: `17px`,
          height: "37px",
          position: "absolute",
          z: "-1",
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `10px -1px 0px -1px ${black} inset`,
          css: css`
            border-right: 1px solid ${white};
            border-top: 1px solid #b9c8d4;
          `,
        }}
      />
      <Spacing
        {...{
          // left fire gradient (overlays main body)
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: running ? fireDarkGradient : "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: running ? "none" : `10px -1px 0px -1px ${black} inset`,
          css: css`
            border-right: 1px solid ${white};
            border-top: 1px solid #b9c8d4;

            ${running &&
            css`
              border-bottom: 1px solid white;
              border-left: none;
              border-top: 1px solid ${black};
            `}
          `,
        }}
      />
      <Spacing
        {...{
          // right fire gradient
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: running ? fireLightGradient : "#e5ecf0",
          border: `1px solid ${white}`,
          boxShadow: running ? "none" : `-10px -1px 0px -1px ${white} inset`,
          css: css`
            border-left: 1px solid ${running ? "#e5ecf0" : black};
          `,
        }}
      />
      <Spacing
        {...{
          // right underside (main body)
          width: `17px`,
          height: "37px",
          position: "absolute",
          absoluteLeft: "94px",
          z: "-1",
          background: "#e5ecf0",
          border: `1px solid ${white}`,
          boxShadow: `-10px -1px 0px -1px ${white} inset`,
          css: css`
            border-left: 1px solid ${black};
          `,
        }}
      />
      <Spacing
        {...{
          // right wing
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteRight: "53px",
          borderRadius: "0px 150% 5px 0px",
          background: running ? fireLightGradient.replace("transparent", white) : "#e5ecf0",
          border: running ? "none" : "1px solid #d57544",
          borderWidth: "2px 2px 2px 0px",
          height: "37px",
          width: "24px",
          transform: "skew(0deg, 45deg)",
        }}
      />
    </Spacing>
  );
};
