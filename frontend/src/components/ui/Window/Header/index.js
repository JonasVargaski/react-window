import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { MdClose, MdRemove } from 'react-icons/md';
import useI18n from '~/hooks/useI18n';

import { Container, GrabContainer, Title, Actions, Button } from './styles';

function Header({ title, isFocused, allowMinimize, allowClose }) {
  const { t } = useI18n();

  return (
    <Container isFocused={isFocused}>
      <GrabContainer>
        <Title>{title}</Title>
      </GrabContainer>

      <Actions>
        {allowMinimize && (
          <Button data-tip={t('minimize')}>
            <MdRemove size={22} color="#f5f5f5" />
          </Button>
        )}

        {allowClose && (
          <Button data-tip={t('close')}>
            <MdClose size={22} color="#f5f5f5" />
          </Button>
        )}
      </Actions>
    </Container>
  );
}

export default memo(Header);
Header.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
  allowMinimize: PropTypes.bool.isRequired,
  allowClose: PropTypes.bool.isRequired,
};
