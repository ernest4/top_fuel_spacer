import React from "react";
import Spacing from "../../layout/Spacing";
import { useSelector, useDispatch } from "react-redux";
import { css } from "styled-components";
import Card from "../../layout/Card";
import Text from "../../layout/Text";
import MainThurster from "./rocket/MainThruster";
import Head from "./rocket/Head";
import StabilizerFins from "./rocket/StabilizerFins";
import Shaft from "./rocket/Shaft";
import IonThrusters from "./rocket/IonThrusters";
import * as rocketActions from "../../store/actions/rocket";
import Fire from "./rocket/Fire";

const Rocket = () => {
  const dispatch = useDispatch();

  const currentStageId = useSelector(state => state.launchSequence.currentStageId);

  const running = useSelector(state => state.game.running);

  const kineticEnergy = useSelector(state => state.rocket.kineticEnergy);
  const kineticEnergyCapacity = useSelector(state => state.rocket.kineticEnergyCapacity);
  const onAddKineticEnergy = () => {
    if (!running) return;

    let newKineticEnergy = kineticEnergy + 10;

    newKineticEnergy =
      newKineticEnergy < kineticEnergyCapacity ? newKineticEnergy : kineticEnergyCapacity;

    dispatch(rocketActions.setKineticEnergy(newKineticEnergy));
  };

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
      <Shaft steam={currentStageId < 2 ? 1 : null} />
      <IonThrusters />
      <Shaft steam={currentStageId < 2 ? 2 : null} />
      <Shaft />
      <MainThurster />
      {running && <Fire />}
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
