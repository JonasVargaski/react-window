import produce from 'immer';
import types from './types';

const INITIAL_STATE = {
  profile: {
    name: '',
    email: '',
    avatar: {},
  },
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.UPDATE_PROFILE__SUCCESS: {
        draft.user = action.payload.user;
        break;
      }
      default:
    }
  });
}
