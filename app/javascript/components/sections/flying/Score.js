import React, { useEffect, useRef, useState } from "react";
import Spacing from "../../layout/Spacing";
import Text from "../../layout/Text";
import { useSelector, useDispatch, batch } from "react-redux";
import * as scoreActions from "../../store/actions/score";

const Score = () => {
  const [distance, setDistance] = useState(0);

  // const distance = useSelector(state => state.score.distance);
  // const speed = useSelector(state => state.score.speed);

  // TODO: move out the incrementer so it gets rerendered little as possible !!!

  const onDistance = newDistance => setDistance(newDistance);

  // TODO: redux is too slow. will need to custom render all the counters. See about sending a local
  // callback with value to this component

  // TODO: needs more optimization. CPU target, 15% !!!
  return (
    <Spacing vertical>
      <Text white {...{ children: `${distance} meters` }} />
      {/* <Text white {...{ children: `${speed} per second` }} /> */}
      <Text white {...{ children: `??? acceleration` }} />
      <Incrementer {...{ onDistance }} />
    </Spacing>
  );
};

export default Score;

const Incrementer = ({ onDistance: onDistanceCallback }) => {
  const [distance, setDistance] = useState(0);
  const disptach = useDispatch();

  // const distance = useSelector(state => state.score.distance);
  // const speed = useSelector(state => state.score.speed);
  // // const acceleration = useSelector(state => state.score.acceleration);

  const requestRef = useRef();
  const previousTimeRef = useRef();
  const updateInterval = useRef(0);
  const reduxUpdateInterval = useRef(0);

  const speed = 100; // testing

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
          updateInterval.current = 0;

          // distanceRef.current = distanceRef.current + speedRef.current * deltaTime;
          setDistance(distance => Math.round(distance + speed * deltaTime));
          // console.log(distance);

          if (REDUX_UPDATE_INTERVAL < reduxUpdateInterval.current) {
            reduxUpdateInterval.current = 0;

            batch(() => {
              disptach(scoreActions.setDistance(distance));
              // disptach(scoreActions.setSpeed(speed + acceleration * deltaTime));
            });
          }
        }
      }

      previousTimeRef.current = time;
      requestRef.current = window.requestAnimationFrame(updateScore);
    };

    requestRef.current = window.requestAnimationFrame(updateScore);

    return () => window.cancelAnimationFrame(requestRef.current);
  }, [disptach, distance]);
  // }, [disptach, distance, speed, distanceRef, speedRef]);

  useEffect(() => {
    if (distance && onDistanceCallback) onDistanceCallback(distance);
  }, [distance, onDistanceCallback]);

  // return <div />;
  return <div children={distance} />;
};

const REDUX_UPDATE_INTERVAL = 500;
const UPDATE_INTERVAL = 16; // 60fps
