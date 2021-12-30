import { ActionTypes } from "../constants/action-types";
import { Task } from "../../models/Task";

export const setTasks = (tasks: Task[]) => {
  return {
    type: ActionTypes.SET_TASKS,
    payload: tasks,
  };
};
