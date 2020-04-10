import React, { memo, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import DraggableCore from 'react-draggable';

import useStyle from '~/hooks/useVisualStyle';

import { setWindowInFocus } from '~/store/modules/portal/actions';

import { Container } from './styles';
import Header from './Header';
import Content from './Content';

function Window({ window, isFocused }) {
  const [style, setStyle] = useStyle({
    height: window.props.h,
    width: window.props.w,
  });

  const dispatch = useDispatch();

  function handleFocus() {
    dispatch(setWindowInFocus(window.session));
  }

  useEffect(() => {
    dispatch(setWindowInFocus(window.session));
  }, [dispatch, window.session]);

  return (
    <DraggableCore
      handle="#grab-touch"
      onStart={() => setStyle({ opacity: '0.7' })}
      onStop={() => setStyle({ opacity: '1' })}
    >
      <Container
        id={`${window.session}.${window.key}`}
        style={style}
        isFocused={isFocused}
        onClick={handleFocus}
        onFocus={handleFocus}
        tabIndex="-1"
      >
        <Header
          setStyleWindow={setStyle}
          isFocused={isFocused}
          title={window.props.title}
          allowMinimize={window.props.allowMinimize}
          allowClose={window.props.allowClose}
        />

        <Content data={window} />
      </Container>
    </DraggableCore>
  );
}

export default memo(Window);

Window.propTypes = {
  window: PropTypes.shape({
    session: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    components: PropTypes.array.isRequired,
    css: PropTypes.object.isRequired,
    props: PropTypes.shape({
      title: PropTypes.string.isRequired,
      w: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      allowMinimize: PropTypes.bool.isRequired,
      allowClose: PropTypes.bool.isRequired,
    }).isRequired,
  }).isRequired,
  isFocused: PropTypes.bool.isRequired,
};
