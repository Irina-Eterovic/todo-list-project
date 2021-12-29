import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";

const rootReducer = combineReducers({
  allTasks: taskReducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
