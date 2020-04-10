import React, { memo } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

function Frame({ styles, css }) {
  return <Container css={css} style={styles} />;
}

export default memo(Frame);

Frame.propTypes = {
  styles: PropTypes.object.isRequired,
  css: PropTypes.string.isRequired,
};
