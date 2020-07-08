export const parseNumberUnit = numberUnit => {
  const number = parseFloat(numberUnit);
  const unit = numberUnit.replace(number, "");

  return { number, unit };
};
