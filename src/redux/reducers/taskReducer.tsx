import { ActionTypes } from "../constants/action-types";
import { Task } from "../../models/Task";

const initialState = {
  openTask: {
    title: "",
    dueDate: "",
    createdDate: "",
    completed: false,
  },
};
type Action = {
  type: string;
  payload?: Task;
};

export const taskReducer = (
  state = initialState,
  { type, payload }: Action
) => {
  switch (type) {
    case ActionTypes.SET_OPEN_TASK:
      return { ...state, openTask: payload };
    default:
      return state;
  }
};
