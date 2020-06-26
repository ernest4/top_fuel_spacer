import React, { forwardRef, memo, useEffect, useRef, useState } from "react";
import _, { initial } from "lodash";
import Spacing from "./Spacing";
import { useSelector } from "react-redux";
import Text from "./Text";
import Container from "./Container";

// Normal ref wont work as i've hijacked it for the draggable purposes. Callback returns the ref
// if the component needs it.
const Draggable = forwardRef(
  (
    {
      children,
      useButton,
      draggableRef: draggableRefCallback,
      onDrag: onDragCallback,
      resetPosition,
      absoluteTop,
      absoluteRight,
      absoluteBottom,
      absoluteLeft,
      ...props
    },
    ref
  ) => {
    const [initialPosition] = useState({
      absoluteTop,
      absoluteRight,
      absoluteBottom,
      absoluteLeft,
    });
    const draggableRef = useRef(null);
    const draggableButtonRef = useRef(null);

    useEffect(() => {
      if (draggableRef && draggableRefCallback) draggableRefCallback(draggableRef);
    }, [draggableRefCallback]);

    useEffect(() => {
      if (useButton && draggableButtonRef.current)
        draggableButtonRef.current.onmousedown = createDragMouseDownCallback({
          draggableRef,
          onDragCallback,
        });
      else if (draggableRef.current)
        draggableRef.current.onmousedown = createDragMouseDownCallback({
          draggableRef,
          onDragCallback,
        });
    }, [useButton, draggableButtonRef, onDragCallback]);

    useEffect(() => {
      if (!resetPosition || !initialPosition || !onDragCallback) return;

      const {
        absoluteTop: newTop,
        absoluteRight: newRight,
        absoluteBottom: newBottom,
        absoluteLeft: newLeft,
      } = initialPosition;

      if (useButton && draggableButtonRef.current) {
        draggableButtonRef.current.style.top = newTop;
        draggableButtonRef.current.style.right = newRight;
        draggableButtonRef.current.style.bottom = newBottom;
        draggableButtonRef.current.style.left = newLeft;
        onDragCallback({ newTop, newLeft });
      } else if (draggableRef.current) {
        draggableRef.current.style.top = newTop;
        draggableRef.current.style.right = newRight;
        draggableRef.current.style.bottom = newBottom;
        draggableRef.current.style.left = newLeft;
        onDragCallback({ newTop, newLeft });
      }
    }, [useButton, resetPosition, initialPosition, onDragCallback]);

    return (
      <Spacing
        {...{ ...props, position: "absolute", z: "9999", ref: draggableRef, ...initialPosition }}
      >
        <Spacing {...{ position: "absolute", absoluteLeft: "100%" }}>
          {useButton && <DraggableButton ref={draggableButtonRef} />}
        </Spacing>
        {children}
      </Spacing>
    );
  }
);

export default memo(Draggable);

const createDragMouseDownCallback = ({ draggableRef, onDragCallback }) => {
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
      const newTop = `${draggableRef.current.offsetTop - pos2}px`;
      const newLeft = `${draggableRef.current.offsetLeft - pos1}px`;

      draggableRef.current.style.top = newTop;
      draggableRef.current.style.left = newLeft;

      if (onDragCallback) onDragCallback({ newTop, newLeft });
    }, 32);

    /* stop moving when mouse button is released:*/
    document.onmouseup = () => {
      document.onmouseup = null;
      document.onmousemove = null;
    };
  };
};

const DraggableButton = forwardRef(({ ...props }, ref) => {
  const currentThemeId = useSelector(state => state.theme.currentThemeId);
  const furthest = useSelector(state => state.theme.themes[currentThemeId]?.color.furthest);
  const closest = useSelector(state => state.theme.themes[currentThemeId]?.color.closest);
  const secondary = useSelector(state => state.theme.themes[currentThemeId]?.color.secondary);

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
