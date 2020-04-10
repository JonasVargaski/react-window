import produce from 'immer';
import types from './types';

const INITIAL_STATE = {
  windows: {},
  windowInFocus: null,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.REGISTER_WINDOW: {
        const { window } = action.payload;
        draft.windows[window.session] = window;
        draft.windowInFocus = window.session;
        break;
      }
      case types.SET_WINDOW_IN_FOCUS: {
        const { session } = action.payload;
        if (session !== draft.windowInFocus) {
          draft.windowInFocus = session;
        }
        break;
      }
      default:
    }
  });
}
