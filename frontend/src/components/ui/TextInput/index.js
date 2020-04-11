import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TextInput({ elementId, styles, props, css }) {
  const { top, left, zIndex, ...style } = styles;

  return (
    <Container style={{ top, left, zIndex }} css={css}>
      <input
        id={elementId}
        style={style}
        {...props}
        autoComplete="off"
        type="text"
      />
    </Container>
  );
}

TextInput.propTypes = {
  elementId: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired,
  css: PropTypes.string.isRequired,
};
