import {LOGIN, LOGOUT} from "../constant-type/auth-contant";

export const login = () => {
  return {
    type: LOGIN
  }
};

export const logout = () => {
  return {
    type: LOGOUT
  }
};