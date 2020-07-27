import React, { useEffect, useRef, useState, memo } from "react";
// import Spacing from "../../layout/Spacing"; // These are too heavy weight...
// import Text from "../../layout/Text"; // These are too heavy weight...
import { useDispatch, batch, useSelector } from "react-redux";
import * as scoreActions from "../../store/actions/score";
import styled from "styled-components";
import useTheme from "../../hooks/useTheme";
import Text from "../../layout/Text";
import Spacing from "../../layout/Spacing";
import { setFuel } from "../../store/actions/rocket";
import { round } from "../../utils/Number";

// Highly optimized custom component to deal with constant updates to progress
const Score = () => {
  const disptach = useDispatch();

  const { secondary, primary } = useTheme();

  const reduxDistance = useSelector(state => state.score.distance);
  const [distance, setDistance] = useState(reduxDistance);

  const speed = useSelector(state => state.score.speed);

  const kineticEnergy = useSelector(state => state.rocket.kineticEnergy);

  // TODO: speed affects distance directly, accleration does not. So render acceleration elsewhere

  // const acceleration = useSelector(state => state.score.acceleration);

  const requestRef = useRef();
  const previousTimeRef = useRef();
  const updateInterval = useRef(0);
  const reduxUpdateInterval = useRef(0);

  useEffect(() => {
    const updateScore = time => {
      if (previousTimeRef.current) {
        const deltaTime = time - previousTimeRef.current;

        updateInterval.current += deltaTime;
        reduxUpdateInterval.current += deltaTime;

        // This interval way is too slow. Will need to find a more perfomant way to display the
        // counter running fast. Internal game state can update at this speed of 5 updates per
        // second, but the counter will have to be done with raw refs (cookie clicker way?)
        if (UPDATE_INTERVAL < updateInterval.current) {
          setDistance(distance => distance + speed * (updateInterval.current / 1000));

          if (REDUX_UPDATE_INTERVAL < reduxUpdateInterval.current) {
            batch(() => {
              disptach(scoreActions.setDistance(distance));
              disptach(scoreActions.setSpeed(speed + kineticEnergy));
            });

            reduxUpdateInterval.current = 0;
          }

          updateInterval.current = 0;
        }
      }

      previousTimeRef.current = time;
      requestRef.current = window.requestAnimationFrame(updateScore);
    };

    requestRef.current = window.requestAnimationFrame(updateScore);

    return () => window.cancelAnimationFrame(requestRef.current);
  }, [disptach, distance, speed, kineticEnergy]);
  // }, [disptach, distance, speed, distanceRef, speedRef]);

  return (
    <Container>
      <Distance children={`${nFormatter(distance, 3)} meters`} />
      <Speed
        secondary={secondary}
        children={`${nFormatter(speed + kineticEnergy, 3)} meters / s`}
      />
    </Container>
  );
};

export default Score;

export const REDUX_UPDATE_INTERVAL = 1000;
const UPDATE_INTERVAL = 50; // 20fps

const Container = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  top: 15vh;
  left: 0px;
  width: 33vw;
  padding-left: 64px;
  padding-right: 64px;
`;

// TODO: ... wip
const Distance = styled.div`
  color: white;
  font-size: 24px;
  transform: skewX(-15deg);
`;
const Speed = styled.div`
  color: ${({ secondary }) => secondary};
  transform: skewX(10deg);
`;

const nFormatter = (num, digits) => {
  let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;

  for (i = SI.length - 1; i > 0; i--) if (num >= SI[i].value) break;

  return `${(num / SI[i].value).toFixed(digits).replace(rx, "$1")} ${SI[i].symbol}`;
};

const SI = [
  { value: 1, symbol: "" },
  { value: 1e3, symbol: "kilo" },
  { value: 1e6, symbol: "Million" },
  { value: 1e9, symbol: "Billion" },
  { value: 1e12, symbol: "Trillion" },
  { value: 1e15, symbol: "Quadrillion" },
  { value: 1e18, symbol: "Quintrillion" },
  { value: 1e21, symbol: "Sextillion" },
  { value: 1e24, symbol: "Septillion" },
  { value: 1e27, symbol: "Octillion" },
  { value: 1e30, symbol: "Nonillion" },
  { value: 1e33, symbol: "Decillion" },
  { value: 1e36, symbol: "Undecillion" },
  { value: 1e39, symbol: "Duodecillion" },
  { value: 1e42, symbol: "Tredecillion" },
  { value: 1e45, symbol: "Quattuordecillion" },
  { value: 1e48, symbol: "Quindecillion" },
  { value: 1e51, symbol: "Sexdecillion" },
  { value: 1e54, symbol: "Septemdecillion" },
  { value: 1e57, symbol: "Octodecillion" },
  { value: 1e60, symbol: "Novemdecillion" },
  { value: 1e63, symbol: "Vigintillion" },
];

// const formatNumberToSiUnit = number => {
//   // TODO: use light years once far enough

//   let wholePart = number;
//   let fractionalPart = 0;
//   let multipleName = "";

//   // if (999999 < number) {
//   // if (999 < number) {
//   for (const [multiplier, multiple] of MULTIPLE_NAMES) {
//     const divisor = Math.pow(1000, multiplier);

//     if (1 <= number / divisor) {
//       wholePart = number / divisor;
//       // fractionalPart = number % divisor;

//       multipleName = multiple;

//       break;
//     }
//   }
//   // }

//   // return `${Math.floor(wholePart)}.${Math.floor(fractionalPart)} ${multipleName}`;
//   return `${round(wholePart, 3)} ${multipleName}`;
// };

// const MULTIPLE_NAMES = [
//   [0, ""],
//   [1, "kilo"],
//   [2, "million"],
//   [3, "billion"], // TODO: not working??
//   [4, "trillion"],
//   [5, "quadrillion"],
//   // [9.4607...wip, "light years"], // light year -> 9.4607×1015 m
// ];
