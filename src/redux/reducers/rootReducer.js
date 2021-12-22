import { combineReducers } from "redux";
import { taskReducer } from "./taskReducer";

const rootReducer = combineReducers({
  allTasks: taskReducer,
});

export default rootReducer;
