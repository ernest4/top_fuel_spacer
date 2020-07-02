import React from "react";
import Spacing from "../../layout/Spacing";
import { useSelector } from "react-redux";
import { css } from "styled-components";
import Fire from "./rocket/Fire";
import Card from "../../layout/Card";
import Text from "../../layout/Text";
import MainThurster from "./rocket/MainThruster";
import Head from "./rocket/Head";
import StabilizerFins from "./rocket/StabilizerFins";
import Shaft from "./rocket/Shaft";
import IonThrusters from "./rocket/IonThrusters";

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
