import { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/reducers/rootReducer";
import { setOpenTask } from "../redux/actions/taskActions";

export function useTask(taskId: string) {
  const openTask = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const loadTask = async () => {
    const response = await axios.get(
      "https://todo-task-web.herokuapp.com/task/" + taskId
    );
    dispatch(setOpenTask(response.data));
  };
  useEffect(() => {
    loadTask();
  }, []);

  return openTask.task.openTask;
}
