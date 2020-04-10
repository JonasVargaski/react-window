import React from 'react';
import PropTypes from 'prop-types';

import useStyle from '~/hooks/useVisualStyle';

import { Container } from './styles';
import Header from './Header';

export default function Window({ visual }) {
  const [style, setStyle] = useStyle(visual.window);

  return (
    <Container style={style}>
      <Header setStyleWindow={setStyle} draggable />
    </Container>
  );
}

Window.propTypes = {
  visual: PropTypes.shape({
    window: PropTypes.shape({
      id: PropTypes.string.isRequired,
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
      zIndex: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
