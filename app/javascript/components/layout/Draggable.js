import React, { forwardRef, memo, useEffect, useRef, useState } from "react";
import _ from "lodash";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";

// Normal ref wont work as i've hijacked it for the draggable purposes. Callback returns the ref
// if the component needs it.
const Draggable = forwardRef(
  ({ children, useButton, draggableRef: draggableRefCallback, ...props }, ref) => {
    const draggableRef = useRef(null);
    const draggableButtonRef = useRef(null);

    useEffect(() => {
      if (draggableRef && draggableRefCallback) draggableRefCallback(draggableRef);
    }, [draggableRef, draggableRefCallback]);

    useEffect(() => {
      if (useButton) draggableButtonRef.current.onmousedown = dragMouseDown;
      else draggableRef.current.onmousedown = dragMouseDown;
    }, [useButton]);

    const dragMouseDown = event => {
      const _event = event || window.event;
      _event.preventDefault();

      // get the mouse cursor position at startup:
      let pos3 = _event.clientX;
      let pos4 = _event.clientY;

      // call a function whenever the cursor moves:
      document.onmousemove = _.throttle(mouseMoveEvent => {
        const _mouseMoveEvent = mouseMoveEvent || window.event;
        _mouseMoveEvent.preventDefault();

        // calculate the new cursor position:
        const pos1 = pos3 - _mouseMoveEvent.clientX;
        const pos2 = pos4 - _mouseMoveEvent.clientY;
        pos3 = _mouseMoveEvent.clientX;
        pos4 = _mouseMoveEvent.clientY;

        // set the element's new position:
        draggableRef.current.style.top = `${draggableRef.current.offsetTop - pos2}px`;
        draggableRef.current.style.left = `${draggableRef.current.offsetLeft - pos1}px`;
      }, 32);

      document.onmouseup = closeDragElement;
    };

    const closeDragElement = () => {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    };

    return (
      <Spacing {...{ ...props, position: "absolute", z: "9999", ref: draggableRef }}>
        <Spacing {...{ position: "absolute", absoluteLeft: "100%" }}>
          {useButton && <DraggableButton ref={draggableButtonRef} />}
        </Spacing>
        {children}
      </Spacing>
    );
  }
);

export default memo(Draggable);

const COMMON_RECT = { position: "absolute", width: "50%", height: "50%", borderRadius: "4px" };

const DraggableButton = forwardRef(({ ...props }, ref) => {
  const {
    theme: {
      color: { furthest, middle, closest },
    },
  } = useSelector(state => state.theme);

  // TODO: need on hover tooltip! (time for hover module... part of Spacing likely as a prop)
  // TODO: this should pop out on hover!!!
  // TODO: draggable icon here (design in copy, circle plus squares...)

  // TODO: color choice seems not contrasty enough! Update themes using HSL and tweak those params!
  return (
    <Spacing
      {...{
        ref,
        background: furthest,
        borderRadius: "4px",
        width: "32px",
        height: "32px",
        all: 0.5,
      }}
    >
      <Spacing {...{ background: middle, ...COMMON_RECT }} />
      <Spacing
        {...{
          background: closest,
          ...COMMON_RECT,
          absoluteLeft: "calc(50% - 4px)",
          absoluteTop: "calc(50% - 4px)",
        }}
      />
    </Spacing>
  );
});
