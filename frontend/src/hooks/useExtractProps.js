import { useState, useEffect } from 'react';

export default (props = {}, Attrs = []) => {
  const [filteredProps, setFilteredProps] = useState({});
  const [attrs] = useState(Attrs);

  useEffect(() => {
    const filtered = {};
    attrs.forEach((attr) => {
      if (props[attr]) {
        filtered[attr] = props[attr];
      }
      setFilteredProps(filtered);
    });
  }, [props]);

  function addProps(newProps) {
    setFilteredProps({ ...filteredProps, newProps });
  }

  return [filteredProps, addProps];
};
