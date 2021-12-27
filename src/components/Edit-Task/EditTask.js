import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTask } from "../../hooks/useTask";
import "./EditTask.css";
import axios from "axios";

export default function EditTask() {
  const [newTitle, setNewTitle] = useState("");
  let navigate = useNavigate();
  let { taskId } = useParams();

  const task = useTask(taskId);
  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const saveNewTitle = async (event) => {
    event.preventDefault();
    const res = await axios
      .patch(" https://todo-task-web.herokuapp.com/task/" + taskId + "/title", {
        title: newTitle,
      })
      .catch((err) => {
        console.log(err);
      });
    navigate("/");
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
          required
        />
        <input type="submit" className="submitButton" />
      </form>
    </div>
  );
}
