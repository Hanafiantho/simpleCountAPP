import {combineReducers} from "redux";
import authReducer from "./authReducer";
import countReducer from "./countReducer";

const reducers = combineReducers({
  auth: authReducer,
  count: countReducer
});

export default reducers;