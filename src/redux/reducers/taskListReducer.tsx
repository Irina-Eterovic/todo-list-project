import { ActionTypes } from "../constants/action-types";

const initialState = {
  tasks: [],
};
type Action = {
  type: string;
  payload?: any;
};

export const taskListReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case ActionTypes.SET_TASKS:
      return { ...state, tasks: payload };
    default:
      return state;
  }
};
