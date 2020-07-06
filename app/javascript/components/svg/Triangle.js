import React from "react";

export default ({ fill, width, height, gradient }) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    preserveAspectRatio="xMidYMid meet"
    viewBox="218.57837108699763 146.14942528735608 110.37901007955864 98.08165505532483"
    {...{ width, height }}
  >
    <defs>
      <path
        d="M275.42 147.57L276.6 148.06L277.67 148.73L277.67 148.73L277.7 148.75L278.66 149.57L279.48 150.53L280.15 151.61L280.42 152.23L325.33 230.02L325.67 231.01L325.68 231.02L325.69 231.05L325.92 232.28L325.96 233.54L325.8 234.8L325.44 236.04L324.87 237.24L324.12 238.34L323.22 239.27L322.21 240.04L321.1 240.63L321.08 240.64L321.05 240.65L319.86 241.07L319 241.23L226.58 241.23L225.67 241.06L225.65 241.05L225.62 241.05L224.44 240.63L223.33 240.04L222.32 239.27L221.42 238.34L220.66 237.25L220.09 236.05L219.74 234.8L219.58 233.54L219.62 232.28L219.62 232.27L219.62 232.24L219.78 231.37L220.1 230.45L265.37 152.03L265.55 151.61L266.22 150.53L267.04 149.57L267.05 149.56L267.07 149.54L268.02 148.73L269.09 148.06L270.26 147.57L271.52 147.26L272.84 147.15L274.17 147.26L275.42 147.57Z"
        id="acZxUPQ16"
      ></path>
      {gradient && (
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          {parseGradient(gradient).map(([offset, stopColor]) => {
            return <stop offset={offset} style={{ stopColor, stopOpacity: 1 }} />;
          })}
        </linearGradient>
      )}
    </defs>
    <use
      xlinkHref="#acZxUPQ16"
      opacity="1"
      fillOpacity="1"
      fill={gradient ? "url(#grad1)" : fill}
    ></use>
  </svg>
);

const parseGradient = gradientString => {
  return gradientString.split(",").map(i => i.split(":"));
};
