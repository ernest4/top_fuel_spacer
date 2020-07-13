export const toPascalCase = str => {
  return str
    .replace(/(\s+)|(_+)/, "_")
    .split("_")
    .map(word => capitalize(word))
    .join("");
};

export const capitalize = str => str.replace(/(^\w)/, w => w.toUpperCase());
