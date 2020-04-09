import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';

import profileTypes from './types';
import { updateProfileSuccess, updateProfileFailure } from './actions';

function* updateProfile({ payload }) {
  console.log('nmsnsndsndsj');
  try {
    const { name, email, avatar_id, ...rest } = payload.data;

    const profile = {
      name,
      email,
      avatar_id,
      ...(rest.oldPassword ? rest : {}),
    };

    const response = yield call(api.put, 'users', profile);

    yield put(updateProfileSuccess(response.data));
  } catch (err) {
    yield put(updateProfileFailure());
  }
}

export default all([
  takeLatest(profileTypes.UPDATE_PROFILE__REQUEST, updateProfile),
]);
