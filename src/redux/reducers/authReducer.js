import {LOGIN, LOGOUT} from "../constant-type/auth-contant";

const initialState = false;

const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return state = true
    case LOGOUT:
      return state = false
    default:
      return state
  }
};

export default authReducer;