import types from './types';

export function updateProfileRequest(data) {
  return {
    type: types.UPDATE_PROFILE__REQUEST,
    payload: { data },
  };
}

export function updateProfileSuccess(user) {
  return {
    type: types.UPDATE_PROFILE__SUCCESS,
    payload: { user },
  };
}

export function updateProfileFailure() {
  return {
    type: types.UPDATE_PROFILE__FAILURE,
  };
}
