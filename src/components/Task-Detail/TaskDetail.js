import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { useTask } from "../../hooks/useTask";
import getPrettierDate from "../../utils/formatDate";

export default function TaskDetail() {
  let { taskId } = useParams();
  const task = useTask(taskId);
  async function completeTask(e) {
    const res = await axios
      .patch(
        " https://todo-task-web.herokuapp.com/task/" + taskId + "/complete",
        {
          completed: e.target.checked,
        }
      )
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <h3>Task details</h3>
      <p>Title: {task.title}</p>
      <p>Due date: {getPrettierDate(task.dueDate)}</p>
      <p>Created date:{getPrettierDate(task.createdDate)}</p>
      <input type="checkbox" onChange={(e) => completeTask(e)} />
      Completed
    </div>
  );
}
