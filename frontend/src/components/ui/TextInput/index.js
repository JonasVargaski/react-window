import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TextInput({ id, styles, props, css }) {
  const { top, left, ...style } = styles;

  return (
    <Container style={{ top, left }} css={css}>
      <input id={id} style={style} {...props} autoComplete="off" type="text" />
    </Container>
  );
}

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired,
  css: PropTypes.string.isRequired,
};
