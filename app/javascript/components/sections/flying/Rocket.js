import React from "react";
import Spacing, { SPACING } from "../../layout/Spacing";
import Container from "../../layout/Container";
import { useSelector } from "react-redux";
import useTheme from "../../hooks/useTheme";
import { css, keyframes } from "styled-components";

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

  return <Container border>{name}</Container>;
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

const Fire = () => {
  return (
    <Spacing
      {...{
        position: "absolute",
        absoluteBottom: "-9%",
        width: "50px",
        height: "50px",
        filter: "blur(4px)",
        css: css`
          align-self: center;
        `,
        z: "-1",
      }}
    >
      <Spacing
        {...{
          position: "absolute",
          absoluteLeft: "50%",
          width: "100%",
          height: "100%",
          transform: "translateX(-50%) rotate(-45deg)",
        }}
      >
        {Array.from(Array(4)).map((flame, key) => {
          return <Flame {...{ key }} />;
        })}
      </Spacing>
    </Spacing>
  );
};

// TODO: optimize animation with transforms !!!
const Flame = () => {
  const yellow = "#FEDC00";
  const orange = "#FEAC00";
  const red = "#F73C00";

  const animationTime = 0.4;

  return (
    <Spacing
      {...{
        position: "absolute",
        background: yellow,
        width: "100%",
        height: "100%",
        css: css`
          &:nth-child(2n + 1) {
            animation-name: ${keyframes`
              0% { transform: translate(0%, 0%) scale(0); background-color: ${yellow}; }
              25% { transform: translate(-1%, 2%) scale(1); }
              40% { background-color: ${orange}; }
              100% { transform: translate(-150%, 170%) scale(0); background-color:  ${red}; }
            `};

            animation-duration: ${animationTime}s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          &:nth-child(2n) {
            animation-name: ${keyframes`
              0% { transform: translate(0%, 0%) scale(0); background-color: ${yellow}; }
              25% { transform: translate(2%, -1%) scale(1); }
              40% { background-color: ${orange}; }
              100% { transform: translate(-170%, 150%) scale(0); background-color: ${red}; }
            `};

            animation-duration: ${animationTime}s;
            animation-timing-function: ease-in;
            animation-iteration-count: infinite;
          }
          &:nth-child(1) {
            animation-delay: 0s;
          }
          &:nth-child(2) {
            animation-delay: ${animationTime / 4}s;
          }
          &:nth-child(3) {
            animation-delay: ${(animationTime / 4) * 2}s;
          }
          &:nth-child(4) {
            animation-delay: ${(animationTime / 4) * 3}s;
          }
        `,
      }}
    />
  );
};
