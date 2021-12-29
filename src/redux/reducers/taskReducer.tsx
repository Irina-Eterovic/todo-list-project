import { ActionTypes } from "../constants/action-types";

const initialState = {
  tasks: [],
};

export const taskReducer = (state = initialState, { type, payload }: any) => {
  switch (type) {
    case ActionTypes.SET_TASKS:
      return { ...state, tasks: payload };
    default:
      return state;
  }
};
