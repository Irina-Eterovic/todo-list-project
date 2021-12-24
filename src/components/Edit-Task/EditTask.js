import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./EditTask.css";
import axios from "axios";

export default function EditTask() {
  const [task, setTask] = useState({});
  const [newTitle, setNewTitle] = useState("");
  let navigate = useNavigate();
  let { taskId } = useParams();
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

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const saveNewTitle = async (event) => {
    event.preventDefault();
    if (newTitle !== "") {
      const res = await axios
        .patch(
          " https://todo-task-web.herokuapp.com/task/" + taskId + "/title",
          {
            title: newTitle,
          }
        )
        .catch((err) => {
          console.log(err);
        });
      navigate("/");
    } else {
      alert("Please write a new title");
    }
  };

  return (
    <div>
      <h2>Edit title task</h2>
      <form onSubmit={saveNewTitle} className="form">
        <p>Current title: {task.title}</p>
        <label>New Title</label>
        <input
          type="text"
          placeholder="Enter New Title"
          name="newTitle"
          onChange={handleChange}
          className="titleInput"
        />
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}
