const stylesAttrs = {
  h: 'height',
  w: 'width',
  x: 'left',
  y: 'top',
  z: 'zIndex',
  fz: 'fontSize',
};

export default function convertStyle(styles) {
  const converted = {};

  Object.keys(styles).forEach((key) => {
    if (stylesAttrs[key]) {
      converted[stylesAttrs[key]] = styles[key];
    } else {
      converted[key] = styles[key];
    }
  });

  return converted;
}
