import React from "react";
import Spacing from "../../layout/Spacing";
import Container from "../../layout/Container";
import { useSelector } from "react-redux";

const Rocket = () => {
  // add energy to dynamo for ion thrusters https://en.wikipedia.org/wiki/Ion_thruster
  const onAddKineticEnergy = () => {}; // dispatch action adding kinteic energy / fuel / acceleration

  return (
    <Spacing
      vertical
      {...{ height: "33vh", background: "green", onClick: onAddKineticEnergy, hover: <Hover /> }}
    >
      <Head />
      <StabilizerFins />
      <Shaft />
      <IonThrusters />
      <Shaft />
      <Shaft />
      <MainThurster />
    </Spacing>
  );
};

export default Rocket;

const Hover = () => {
  const name = useSelector(state => state.rocket.name);

  return <Container border>{name}</Container>;
};

const Head = () => {
  return <Spacing {...{ width: "8px" }} />;
};

const StabilizerFins = () => {
  return <Spacing {...{ width: "8px" }} />;
};

const Shaft = () => {
  return <Spacing {...{ width: "8px" }} />;
};

const IonThrusters = () => {
  return <Spacing {...{ width: "8px" }} />;
};

const MainThurster = () => {
  return <Spacing {...{ width: "8px" }} />;
};
