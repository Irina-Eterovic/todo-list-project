import { useEffect, useState } from "react";
import axios from "axios";
export function useTask(taskId) {
  const [task, setTask] = useState({});
  const loadTask = async () => {
    const response = await axios
      .get("https://todo-task-web.herokuapp.com/task/" + taskId)
      .catch((err) => {
        console.log(err);
      });

    setTask(response.data);
  };
  useEffect(() => {
    loadTask();
  }, []);

  return task;
}
