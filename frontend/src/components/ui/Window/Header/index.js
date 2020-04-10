import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { MdClose, MdRemove } from 'react-icons/md';

import { Container, Title, Actions, Button } from './styles';
import { dragElement } from '~/utils/drag';

export default function Header({ draggable, setStyleWindow }) {
  const windowRef = useRef(null);

  useEffect(() => {
    if (windowRef.current) {
      dragElement(windowRef.current, { onDragEnd: setStyleWindow });
    }
  }, [windowRef]);

  return (
    <Container ref={windowRef} moved={draggable}>
      <Title>Teste janela</Title>

      <Actions>
        <Button>
          <MdRemove size={22} color="#f5f5f5" />
        </Button>

        <Button>
          <MdClose size={22} color="#f5f5f5" />
        </Button>
      </Actions>
    </Container>
  );
}

Header.propTypes = {
  draggable: PropTypes.bool.isRequired,
};
