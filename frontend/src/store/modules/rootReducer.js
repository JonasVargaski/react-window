import { combineReducers } from 'redux';

// import session from "./session/reducers";
import portal from './portal/reducers';
import user from './user/reducers';

export default combineReducers({
  // session,
  portal,
  user,
});
