import { useState } from 'react';

export default function useVisualStyle(style = {}) {
  const [styles, setStyles] = useState(style);

  const setDinamicStyles = (newStyles) => {
    setStyles({ ...styles, ...newStyles });
  };

  return [styles, setDinamicStyles];
}
