export const toPascalCase = str => {
  return str
    .replace(/(\s+)|(_+)/, "_")
    .split("_")
    .map(word => capitalize(word))
    .join("");
};

export const camelCaseToSpace = str => str.replace(/([a-z0-9])([A-Z])/g, "$1 $2");

export const prettyPrintCamel = str => {
  return camelCaseToSpace(str)
    .split(" ")
    .map(word => capitalize(word))
    .join(" ");
};

export const capitalize = str => str.replace(/(^\w)/, w => w.toUpperCase());
