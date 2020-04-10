import types from './types';

export function registerWindow(window) {
  return {
    type: types.REGISTER_WINDOW,
    payload: { window },
  };
}

export function setWindowInFocus(idSession) {
  return {
    type: types.SET_WINDOW_IN_FOCUS,
    payload: { session: idSession },
  };
}
