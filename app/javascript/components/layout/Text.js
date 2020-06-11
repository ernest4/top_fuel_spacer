import React, { useState, useEffect, forwardRef, memo } from "react";

const Text = forwardRef(
  (
    {
      className: initialClassName,
      primary,
      secondary,
      white,
      center,
      light,
      muted,
      bold,
      small,
      extraSmall,
      medium,
      large,
      extraLarge,
      megaLarge,
      jumbotron,
      error,
      initial,
      children,
      ...props
    },
    ref
  ) => {
    const [className, setClassName] = useState();

    useEffect(() => {
      const classNames = ["sv-text", initialClassName];

      if (error) classNames.push("sv-text-error");

      if (light) classNames.push("sv-text-light");
      if (muted) classNames.push("sv-text-muted");
      if (bold) classNames.push("sv-text-bold");
      if (small) classNames.push("sv-text-small");
      if (extraSmall) classNames.push("sv-text-extra-small");
      if (medium) classNames.push("sv-text-medium");
      if (large) classNames.push("sv-text-large");
      if (extraLarge) classNames.push("sv-text-extra-large");
      if (megaLarge) classNames.push("sv-text-mega-large");
      if (jumbotron) classNames.push("sv-text-jumbotron");

      if (primary) classNames.push("sv-text-primary");
      if (secondary) classNames.push("sv-text-secondary");
      if (white) classNames.push("sv-text-white");

      if (center) classNames.push("sv-text-center");
      if (initial) classNames.push("sv-text-initial");

      setClassName(classNames.join(" "));
    }, [
      initialClassName,
      primary,
      secondary,
      white,
      center,
      light,
      muted,
      bold,
      small,
      extraSmall,
      medium,
      large,
      extraLarge,
      megaLarge,
      jumbotron,
      error,
      initial
    ]);

    return <div {...{ className, children, ref, ...props }} />;
  }
);

export default memo(Text);
