import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTask } from "../../hooks/useTask";
import "./EditTask.css";
import axios from "axios";

export default function EditTask() {
  const [newTitle, setNewTitle] = useState("");
  let navigate = useNavigate();
  let { taskId } = useParams();

  const task = useTask(taskId);
  const handleChange = (event: any) => {
    setNewTitle(event.target.value);
  };

  const saveNewTitle = async (event: any) => {
    event.preventDefault();
    await axios.patch(
      " https://todo-task-web.herokuapp.com/task/" + taskId + "/title",
      {
        title: newTitle,
      }
    );

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
