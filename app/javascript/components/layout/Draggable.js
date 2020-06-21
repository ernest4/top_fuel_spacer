import React, { forwardRef, memo, useEffect, useRef, useState } from "react";
import _ from "lodash";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";
import Text from "./Text";
import Container from "./Container";

// Normal ref wont work as i've hijacked it for the draggable purposes. Callback returns the ref
// if the component needs it.
const Draggable = forwardRef(
  ({ children, useButton, draggableRef: draggableRefCallback, ...props }, ref) => {
    const [mouseOver, setMouseOver] = useState(false);
    const draggableRef = useRef(null);
    const draggableButtonRef = useRef(null);

    useEffect(() => {
      if (draggableRef && draggableRefCallback) draggableRefCallback(draggableRef);
    }, [draggableRefCallback]);

    useEffect(() => {
      if (useButton && draggableButtonRef.current)
        draggableButtonRef.current.onmousedown = createDragMouseDownCallback(draggableRef);
      else draggableRef.current.onmousedown = createDragMouseDownCallback(draggableRef);
    }, [useButton, draggableButtonRef]);

    // const interactiveHover = useButton ? <DraggableButton ref={draggableButtonRef} /> : null;

    const onMouseOver = ({ target: { value: hovering } }) => setMouseOver(hovering);

    return (
      <Spacing {...{ ...props, position: "absolute", z: "9999", ref: draggableRef, onMouseOver }}>
        <Spacing {...{ position: "absolute", absoluteLeft: "100%" }}>
          {useButton && mouseOver && <DraggableButton ref={draggableButtonRef} />}
        </Spacing>
        {children}
      </Spacing>
    );
  }
);

export default memo(Draggable);

const createDragMouseDownCallback = draggableRef => {
  return event => {
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

    /* stop moving when mouse button is released:*/
    document.onmouseup = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };
  };
};

const DraggableButton = forwardRef(({ ...props }, ref) => {
  const furthest = useSelector(state => state.theme.theme.color.furthest);
  const closest = useSelector(state => state.theme.theme.color.closest);
  const secondary = useSelector(state => state.theme.theme.color.secondary);

  const COMMON_RECT = {
    position: "absolute",
    width: "50%",
    height: "50%",
    borderRadius: "4px",
    border: `1px solid ${secondary}`,
    boxShadow: `inset 0px 0px 0px 1px ${furthest}`,
  };

  const hover = (
    <Container border>
      <Text extraSmall>Click and drag this button to move around the Debugger</Text>
    </Container>
  );

  return (
    <Spacing
      pointer
      {...{
        ref,
        background: "transparent",
        borderRadius: "4px",
        width: "32px",
        height: "32px",
        all: 0.5,
        hover,
      }}
    >
      <Spacing {...{ background: furthest, ...COMMON_RECT }} />
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
