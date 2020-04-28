import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import Window from '~/components/ui/Window';

import getExample from './examples';

export default function Portal() {
  const windowInFocus = useSelector((state) => state.portal.windowInFocus);

  const [ex, setEx] = useState([]);
  const [w, setW] = useState(450);
  const [h, setH] = useState(250);

  function handleAddWindow() {
    setEx([...ex, getExample(w, h)]);
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

      <div style={{ bottom: 0, position: 'absolute' }}>
        <form onSubmit={handleAddWindow}>
          <input
            style={{ width: 50, margin: 5 }}
            type="number"
            placeholder="width"
            value={w}
            onChange={(e) => setW(Number(e.target.value))}
          />
          <input
            style={{ width: 50, margin: 5 }}
            type="number"
            placeholder="height"
            value={h}
            onChange={(e) => setH(Number(e.target.value))}
          />
          <button type="submit" data-tip="New Window">
            New Window
          </button>
        </form>
      </div>
    </Container>
  );
}
