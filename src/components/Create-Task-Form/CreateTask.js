import axios from "axios";
import { useState } from "react";
import "./CreateTask.css";

export default function CreateTask() {
  let [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    createdDate: "",
    completed: false,
  });
  let today = new Date().toISOString().split("T")[0];

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const getCreationTime = () => {
    return new Date().toISOString();
  };

  const saveTask = async (event) => {
    let createdTime = getCreationTime();
    let formattedDueDate = new Date(formData.dueDate).toISOString();
    let requestBody = {
      title: formData.title,
      completed: false,
      dueDate: formattedDueDate,
      createdDate: createdTime,
    };
    console.log(requestBody);
    const response = await axios
      .post(" https://todo-task-web.herokuapp.com/task/create", requestBody)
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div>
      <h3>Create new task</h3>
      <form onSubmit={saveTask} className="form">
        <div className="field">
          <label>Title: </label>
          <input type="text" name="title" onChange={handleChange} />
        </div>
        <div className="field">
          <label>Due date: </label>
          <input
            type="datetime-local"
            name="dueDate"
            onChange={handleChange}
            min={new Date().toISOString().slice(0, -8)}
          />
        </div>
        <div className="field">
          <input type="submit" className="button" />
        </div>
      </form>
    </div>
  );
}
