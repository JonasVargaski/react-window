import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function TextArea({ elementId, styles, props, css }) {
  const { top, left, zIndex, ...style } = styles;

  return (
    <Container style={{ top, left, zIndex }} css={css}>
      <textarea
        id={elementId}
        style={{ ...style, resize: 'none' }}
        {...props}
        autoComplete="off"
      />
    </Container>
  );
}

TextArea.propTypes = {
  elementId: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  props: PropTypes.object.isRequired,
  css: PropTypes.string.isRequired,
};
