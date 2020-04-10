import React from 'react';

import { Container } from './styles';
import Window from '~/components/ui/Window';

const visual = {
  window: {
    id: 'uBN45kD21',
    width: 600,
    height: 400,
    left: 400,
    top: 100,
    zIndex: 1,
    compoents: {},
  },
};

export default function Portal() {
  return (
    <Container>
      <Window visual={visual} />
    </Container>
  );
}
