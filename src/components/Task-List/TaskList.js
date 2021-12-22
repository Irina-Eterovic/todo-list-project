import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { setTasks } from "../../redux/actions/taskActions";
import "./TaskList.css";
import { useSelector, useDispatch } from "react-redux";

export default function TaskList() {
  const taskList = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchTasks = async () => {
    const response = await axios
      .get(" https://todo-task-web.herokuapp.com/task/list")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setTasks(response.data.allTasks));
  };
  useEffect(() => {
    fetchTasks();
  }, []);

  function deleteTask(taskId) {
    axios
      .delete("https://todo-task-web.herokuapp.com/task/" + taskId)
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h1>Tasks</h1>
      {taskList.allTasks.tasks.map((task) => {
        return (
          <div className="row" key={task.taskId}>
            <span className="field">
              <input type="checkbox" checked={task.completed} /> Completed
            </span>
            <span className="field">{task.title}</span>
            <span className="field">{task.dueDate}</span>
            <span className="field">{task.createdDate}</span>
            <button className="field action"> edit</button>
            <button
              className="field action"
              onClick={() => deleteTask(task.taskId)}
            >
              del
            </button>
          </div>
        );
      })}
    </div>
  );
}
