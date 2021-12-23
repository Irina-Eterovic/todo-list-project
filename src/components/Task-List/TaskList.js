import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { setTasks } from "../../redux/actions/taskActions";
import "./TaskList.css";
import { useSelector, useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";

export default function TaskList() {
  const [loading, setLoading] = useState(true);
  const taskList = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchTasks = async () => {
    const response = await axios
      .get(" https://todo-task-web.herokuapp.com/task/list")
      .catch((err) => {
        console.log(err);
      });

    dispatch(setTasks(response.data.allTasks));
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  async function deleteTask(taskId) {
    setLoading(true);
    const resp = await axios
      .delete("https://todo-task-web.herokuapp.com/task/" + taskId)
      .catch((err) => {
        console.log(err);
      });
    fetchTasks();
  }
  return loading ? (
    <ClipLoader loading={loading} size={100} />
  ) : (
    <div>
      <h3>List of available tasks</h3>
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
