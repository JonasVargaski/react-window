const stylesAttrs = {
  h: 'height',
  w: 'width',
  x: 'left',
  y: 'top',
  z: 'zIndex',
  mw: 'maxWidth',
  fs: 'fontSize',
  fw: 'fontWeight',
  ta: 'textAlign',
  va: 'verticalAlign',
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
