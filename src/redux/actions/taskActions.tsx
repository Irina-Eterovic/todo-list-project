import { ActionTypes } from "../constants/action-types";

export const setTasks = (tasks: any) => {
  return {
    type: ActionTypes.SET_TASKS,
    payload: tasks,
  };
};
