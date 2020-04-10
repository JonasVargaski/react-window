import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import Window from '~/components/ui/Window';

import getExample from './examples';

export default function Portal() {
  const windowInFocus = useSelector((state) => state.portal.windowInFocus);

  const [ex, setEx] = useState([]);

  function handleAddWindow() {
    setEx([...ex, getExample()]);
  }
  useEffect(() => {
    handleAddWindow();
  }, []);

  return (
    <Container>
      {ex.map((window) => (
        <Window
          key={window.session}
          window={window}
          isFocused={window.session === windowInFocus}
        />
      ))}

      <button
        type="button"
        style={{ bottom: 0, position: 'absolute', padding: 12 }}
        onClick={handleAddWindow}
      >
        New Window
      </button>
    </Container>
  );
}
