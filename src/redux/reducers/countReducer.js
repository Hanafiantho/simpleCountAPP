import {INCREASE, DECREASE} from "../constant-type/count-constant";

const initialState = 0;

const countReducer = (state = initialState, action) => {
  switch(action.type) {
    case INCREASE:
      return state + 1
    case DECREASE:
      return state - 1
    default:
      return state
  }
};

export default countReducer;