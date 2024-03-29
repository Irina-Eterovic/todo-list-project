import { useParams } from "react-router";
import axios from "axios";
import { useTask } from "../../hooks/useTask";
import getPrettierDate from "../../utils/formatDate";

export default function TaskDetail() {
  const { taskId } = useParams();
  let task = useTask(taskId!);
  let checked = task?.completed;
  async function completeTask(e: any) {
    await axios.patch(
      " https://todo-task-web.herokuapp.com/task/" + taskId + "/complete",
      {
        completed: e.target.checked,
      }
    );
  }
  return (
    <div className="m-4">
      <h3>Task details</h3>
      <p>Title: {task?.title}</p>
      <p>Due date: {getPrettierDate(task?.dueDate)}</p>
      <p>Created date:{getPrettierDate(task?.createdDate)}</p>
      <input
        type="checkbox"
        defaultChecked={checked}
        onChange={(e) => completeTask(e)}
      />
      Completed
    </div>
  );
}
