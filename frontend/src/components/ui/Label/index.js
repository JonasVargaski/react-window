import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Label({ styles, css, props }) {
  const { value } = props;
  return (
    <Container style={styles} css={css}>
      {value}
    </Container>
  );
}

Label.propTypes = {
  styles: PropTypes.object.isRequired,
  css: PropTypes.string.isRequired,
  props: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }).isRequired,
};
