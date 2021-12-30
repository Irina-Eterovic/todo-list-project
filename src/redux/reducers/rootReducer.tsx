import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";
import { taskListReducer } from "./taskListReducer";
const rootReducer = combineReducers({
  allTasks: taskListReducer,
  task: taskReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
