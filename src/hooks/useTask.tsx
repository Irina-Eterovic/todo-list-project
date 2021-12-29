import { useEffect, useState } from "react";
import axios from "axios";

export function useTask(taskId: string | undefined) {
  const [task, setTask] = useState({
    title: "",
    dueDate: "",
    createdDate: "",
    completed: false,
  });
  const loadTask = async () => {
    const response = await axios.get(
      "https://todo-task-web.herokuapp.com/task/" + taskId
    );
    setTask(response.data);
  };
  useEffect(() => {
    loadTask();
  }, []);

  return task;
}
