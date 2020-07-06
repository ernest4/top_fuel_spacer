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

// Highly optimized custom component to deal with constant updates to progress
const Score = () => {
  const disptach = useDispatch();

  const { secondary, primary } = useTheme();

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

  return (
    <Container>
      <Distance children={`${formatNumberToSiUnit(distance)} meters`} />
      <Speed primary={primary} children={`${formatNumberToSiUnit(speed)} meters / s`} />
      <Spacing top={1} />
      <Acceleration />
      <Fuel />
    </Container>
  );
};

export default Score;

export const REDUX_UPDATE_INTERVAL = 1000;
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
const Distance = styled.div`
  color: white;
  font-size: 24px;
  transform: skewX(-20deg);
`;
const Speed = styled.div`
  color: ${({ primary }) => primary};
  transform: skewX(10deg);
`;

const formatNumberToSiUnit = number => {
  // TODO: use light years once far enough

  let wholePart = number;
  let fractionalPart = 0;
  let multipleName = "";

  if (999999 < number) {
    for (const [multiplier, multiple] of MULTIPLE_NAME) {
      const divisor = Math.pow(1000, multiplier);

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
  [2, "million"],
  [3, "billion"], // TODO: not working??
  [4, "trillion"],
  [5, "quadrillion"],
  // [9.4607...wip, "light years"], // light year -> 9.4607×1015 m
];

const Acceleration = memo(() => {
  const dispatch = useDispatch();

  const fuel = useSelector(state => state.rocket.fuel);
  const acceleration = useSelector(state => state.score.acceleration);

  useEffect(() => {
    if (fuel <= 0) dispatch(scoreActions.setAcceleration(0));
    else dispatch(scoreActions.setAcceleration(acceleration + 10));
  }, [fuel, dispatch]);

  return (
    <Text
      extraSmall
      light
      secondary
      transform="skew(-20deg)"
      children={`${formatNumberToSiUnit(acceleration)} meters / s / s`}
    />
  );
});

const Fuel = memo(() => {
  const dispatch = useDispatch();

  const distance = useSelector(state => state.score.distance);
  const acceleration = useSelector(state => state.score.acceleration);
  const fuel = useSelector(state => state.rocket.fuel);

  useEffect(() => {
    dispatch(setFuel(fuel - acceleration * distance));
  }, [distance, dispatch]);

  return (
    <Text
      extraSmall
      light
      danger
      transform="skew(10deg)"
      children={`${formatNumberToSiUnit(fuel)} fuel`}
    />
  );
});
