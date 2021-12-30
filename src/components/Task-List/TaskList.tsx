import { useEffect, useState } from "react";
import axios from "axios";
import { setTasks } from "../../redux/actions/taskListActions";
import "./TaskList.css";
import { useSelector, useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import { Link } from "react-router-dom";
import getPrettierDate from "../../utils/formatDate";
import { Table } from "reactstrap";
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { RootState } from "../../redux/reducers/rootReducer";

export default function TaskList() {
  const [loading, setLoading] = useState(true);
  const taskList = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const fetchTasks = async () => {
    const response = await axios.get(
      " https://todo-task-web.herokuapp.com/task/list"
    );

    dispatch(setTasks(response.data.allTasks));
    setLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  async function deleteTask(taskId: String) {
    setLoading(true);
    await axios.delete("https://todo-task-web.herokuapp.com/task/" + taskId);

    fetchTasks();
  }

  async function completeTask(e: any, taskId: String) {
    await axios.patch(
      " https://todo-task-web.herokuapp.com/task/" + taskId + "/complete",
      {
        completed: e.target.checked,
      }
    );
  }
  return loading ? (
    <ClipLoader loading={loading} size={100} />
  ) : (
    <div className="m-4">
      <h3>List of available tasks</h3>
      <Table striped>
        <thead>
          <tr>
            <th>Completed</th>
            <th>Title</th>
            <th>Due Date</th>
            <th>Created Date</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {taskList.allTasks.tasks.map((task: any) => {
            return (
              <tr key={task.taskId}>
                <td className="field">
                  <input
                    type="checkbox"
                    defaultChecked={task.completed}
                    onChange={(e) => completeTask(e, task.taskId)}
                  />
                </td>
                <td className="field">
                  <Link to={`/task/${task.taskId}`} className="no-style">
                    {task.title}
                  </Link>
                </td>
                <td className="field">{getPrettierDate(task.dueDate)}</td>
                <td className="field">{getPrettierDate(task.createdDate)}</td>
                <td>
                  <button className="field action">
                    <Link to={`/edit/${task.taskId}`} className="no-style">
                      <FaEdit />
                    </Link>
                  </button>
                </td>
                <td>
                  <button
                    className="field action"
                    onClick={() => deleteTask(task.taskId)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
