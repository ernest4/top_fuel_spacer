import React from "react";
import { normalizeRequiredCompleted } from "../../../store/reducers/achievements";
import useTheme from "../../../hooks/useTheme";
import ProgressBar from "../../../misc/ProgressBar";

const Progress = ({ required, completed }) => {
  const { required: range, completed: value } = normalizeRequiredCompleted({ required, completed });

  const { primary } = useTheme();

  const barBackground = range === value ? primary : null;

  return <ProgressBar {...{ barBackground, value, range }} />;
};

export default Progress;
