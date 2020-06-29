import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import Container from "../../layout/Container";
import { useSelector } from "react-redux";
import useTheme from "../../hooks/useTheme";

const Rocket = () => {
  // add energy to dynamo for ion thrusters https://en.wikipedia.org/wiki/Ion_thruster
  const onAddKineticEnergy = () => {}; // dispatch action adding kinteic energy / fuel / acceleration

  return (
    <Spacing
      vertical
      {...{
        height: "33vh",
        align: "center",
        background: "green",
        onClick: onAddKineticEnergy,
        hover: <Hover />,
      }}
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

  console.log(name); // WIP testing

  return <Container border>{name}</Container>;
};

const Head = () => {
  const { black } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "50%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `19px -1px 0px -1px ${black} inset`,
          borderRadius: "100px 0px 0px 0px",
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${black}`,
          boxShadow: "-19px -1px 0px -1px red inset",
          borderRadius: "0px 100px 0px 0px",
        }}
      />
    </Spacing>
  );
};

const StabilizerFins = () => {
  const { black } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "50%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `19px -1px 0px -1px ${black} inset`,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${black}`,
          boxShadow: "-19px -1px 0px -1px red inset",
        }}
      />
    </Spacing>
  );
};

const Shaft = () => {
  const { black } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "50%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `19px -1px 0px -1px ${black} inset`,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${black}`,
          boxShadow: "-19px -1px 0px -1px red inset",
        }}
      />
    </Spacing>
  );
};

const IonThrusters = () => {
  const { black } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "50%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `19px -1px 0px -1px ${black} inset`,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${black}`,
          boxShadow: "-19px -1px 0px -1px red inset",
        }}
      />
    </Spacing>
  );
};

const MainThurster = () => {
  const { black } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "50%" }}>
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#b9c8d4",
          border: `1px solid ${black}`,
          boxShadow: `19px -1px 0px -1px ${black} inset`,
        }}
      />
      <Spacing
        {...{
          width: `${6 * SPACING}px`,
          height: `100%`,
          background: "#e5ecf0",
          border: `1px solid ${black}`,
          boxShadow: "-19px -1px 0px -1px red inset",
        }}
      />
    </Spacing>
  );
};
