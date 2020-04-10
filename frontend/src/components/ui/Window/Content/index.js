import React from 'react';
import PropTypes from 'prop-types';
import mountComponents from '../../mountComponents';

import { Container } from './styles';

export default function Content({ data }) {
  return (
    <Container>
      {mountComponents(data).map(({ key, Component, ...rest }) => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <Component key={key} {...rest} />
      ))}
    </Container>
  );
}

Content.propTypes = {
  data: PropTypes.object.isRequired,
};
