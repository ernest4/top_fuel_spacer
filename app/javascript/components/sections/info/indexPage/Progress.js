import React from "react";
import { normalizeRequiredCompleted } from "../../../store/reducers/achievements";
import useTheme from "../../../hooks/useTheme";
import ProgressBar from "../../../misc/ProgressBar";
import Container from "../../../layout/Container";
import Text from "../../../layout/Text";
import Card from "../../../layout/Card";

const Progress = ({ required, completed }) => {
  const { required: range, completed: value } = normalizeRequiredCompleted({ required, completed });

  const { primary } = useTheme();

  const barBackground = range === value ? primary : null;

  return (
    <ProgressBar
      {...{ barBackground, value, range, hover: <Hover {...{ required, completed }} /> }}
    />
  );
};

export default Progress;

const Hover = ({ required, completed }) => {
  if (typeof required === "number") return null;

  const body = required
    .map((requiredItem, key) => {
      const done = completed.some(completedItem => completedItem === requiredItem);

      if (done) return `<p>${requiredItem} | DONE</p>`;

      return `<s>${requiredItem}</s>`;
    })
    .join("<space /><line /><space />");

  return <Card border right noDivider {...{ body }} />;
};

// ALTERNATIVE APPROACH...less prefered due to break in consistancy between other hovers
// const Hover = ({ required, completed }) => {
//   if (typeof required === "number") return null;

//   return (
//     <Container split border right>
//       {required.map((requiredItem, key) => {
//         const done = completed.some(completedItem => completedItem === requiredItem);

//         return (
//           <Text
//             extraSmall
//             {...{
//               key,
//               primary: done,
//               secondary: !done,
//               children: `${requiredItem}${done ? " | DONE" : ""}`,
//             }}
//           />
//         );
//       })}
//     </Container>
//   );
// };
