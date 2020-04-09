import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfileRequest } from '~/store/modules/user/actions';

export default function SignIn() {
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      dispatch(updateProfileRequest({ email: 'ndjndsj', name: 'nbjnsdj' }));
    }, 1000);
  }, [dispatch]);

  return <div>login</div>;
}
