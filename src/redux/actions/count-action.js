import {INCREASE, DECREASE} from "../constant-type/count-constant";

export const increase = () => {
  return {
    type: INCREASE
  }
};

export const decrease = () => {
  return {
    type: DECREASE
  }
};