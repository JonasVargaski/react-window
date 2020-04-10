import { useState } from 'react';

export default function useVisualStyle(style = {}) {
  const [styles, setStyles] = useState(style);

  const setDinamicStyles = (newStyles) => {
    setStyles({ ...styles, ...newStyles });
  };

  const removeStyles = (attrs = []) => {
    const allStyles = styles;
    attrs.forEach((attr) => {
      delete allStyles[attr];
    });
    setStyles(allStyles);
  };

  return [styles, setDinamicStyles, removeStyles];
}
