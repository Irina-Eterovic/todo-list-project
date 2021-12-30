import { Task } from "src/models/Task";
import { ActionTypes } from "../constants/action-types";

export const setOpenTask = (task: Task) => {
  return {
    type: ActionTypes.SET_OPEN_TASK,
    payload: task,
  };
};
