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
