import React, { useEffect } from "react";
import Spacing, { SPACING } from "../../../layout/Spacing";
import useTheme from "../../../hooks/useTheme";
import { css } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setKineticEnergy } from "../../../store/actions/rocket";
import Beam from "./Beam";

const IonThrusters = () => {
  const { black, white } = useTheme();

  return (
    <Spacing horizontal {...{ height: "100%", width: "100%" }}>
      <Spacing
        {...{
          // left thruster
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteLeft: "61px",
          borderRadius: "8px 0px 0px 4px",
          background: black,
          border: "2px solid #45afe4",
          height: "37px",
          width: "16px",
          transform: "skew(0deg, -45deg)",
          children: <IonBeam />,
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
          // right thruster
          width: `${6 * SPACING}px`,
          position: "absolute",
          absoluteRight: "61px",
          borderRadius: "0px 8px 4px 0px",
          background: "#e5ecf0",
          border: "1px solid #d57544",
          borderWidth: "2px 2px 2px 0px",
          height: "37px",
          width: "16px",
          transform: "skew(0deg, 45deg)",
          children: <IonBeam />,
        }}
      />
    </Spacing>
  );
};

export default IonThrusters;

// TODO: might need to be done more efficiently. Make the update in score tracker possibly batching
// it and just provide the result here.
const IonBeam = () => {
  const dispatch = useDispatch();

  const distance = useSelector(state => state.score.distance);

  const kineticEnergy = useSelector(state => state.rocket.kineticEnergy);
  const kineticEnergyCapacity = useSelector(state => state.rocket.kineticEnergyCapacity);

  useEffect(() => {
    if (!distance || !kineticEnergy || !dispatch) return;
    if (kineticEnergy === 0) return;

    let newKineticEnergy = kineticEnergy - 0.1 * kineticEnergy;

    // NOTE: once it gets close to 0, just set to 0.
    newKineticEnergy = newKineticEnergy < 0.01 * kineticEnergyCapacity ? 0 : newKineticEnergy;

    dispatch(setKineticEnergy(newKineticEnergy));
  }, [distance, dispatch]);

  return <Beam {...{ intensityRatio: kineticEnergy / kineticEnergyCapacity }} />;
};
