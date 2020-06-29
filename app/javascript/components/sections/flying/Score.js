import React, { useEffect, useRef, useState } from "react";
// import Spacing from "../../layout/Spacing"; // These are too heavy weight...
// import Text from "../../layout/Text"; // These are too heavy weight...
import { useDispatch, batch, useSelector } from "react-redux";
import * as scoreActions from "../../store/actions/score";
import styled from "styled-components";

// Highly optimized custom component to deal with constant updates to progress
const Score = ({ onDistance: onDistanceCallback }) => {
  const disptach = useDispatch();

  const reduxDistance = useSelector(state => state.score.distance);
  const [distance, setDistance] = useState(reduxDistance);

  const speed = useSelector(state => state.score.speed);

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
          // console.log(updateInterval.current);
          // console.log(updateInterval.current / 1000);
          // console.log(speed * (updateInterval.current / 1000));

          setDistance(distance => distance + speed * (updateInterval.current / 1000));

          if (REDUX_UPDATE_INTERVAL < reduxUpdateInterval.current) {
            batch(() => {
              disptach(scoreActions.setDistance(distance));
              // disptach(scoreActions.setSpeed(speed + acceleration * deltaTime));
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
  }, [disptach, distance, speed]);
  // }, [disptach, distance, speed, distanceRef, speedRef]);

  useEffect(() => {
    if (distance && onDistanceCallback) onDistanceCallback(distance);
  }, [distance, onDistanceCallback]);

  return (
    <Container>
      {/* <div children={distance} /> */}
      <Distance children={`${formatNumberToSiUnit(distance)} meters`} />
      <Speed children={`${formatNumberToSiUnit(speed)} meters / s`} />
      {/* <Acceleration children={`${formatNumberToSiUnit(acceleration)} meters / s / s`} /> */}
    </Container>
  );
};

export default Score;

const REDUX_UPDATE_INTERVAL = 1000;
const UPDATE_INTERVAL = 50; // 20fps

const Container = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  top: 15vh;
  left: 0px;
  width: 33vw;
  padding-left: 64px;
  padding-right: 64px;
`;

// TODO: ... wip
const Distance = styled.div``;
const Speed = styled.div``;
const Acceleration = styled.div``;

const formatNumberToSiUnit = number => {
  // TODO: use light years once far enough

  let wholePart = number;
  let fractionalPart = 0;
  let multipleName = "";

  if (999999 < number) {
    for (const [multiplier, multiple] of MULTIPLE_NAME) {
      const divisor = 1000 * multiplier;

      if (1 < number / divisor) {
        wholePart = number / divisor;
        fractionalPart = number % divisor;

        multipleName = multiple;

        break;
      }
    }
  }

  return `${Math.floor(wholePart)}.${Math.floor(fractionalPart)} ${multipleName}`;
};

const MULTIPLE_NAME = [
  [1, ""], // TODO: skip thousand, begin words from million
  [2, "million"],
  [3, "billion"],
  [4, "trillion"],
  [5, "quadrillion"],
  // [9.4607...wip, "light years"], // light year -> 9.4607×1015 m
];
