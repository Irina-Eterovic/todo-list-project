import React from "react";
import CreateTask from "../Create-Task-Form/CreateTask";
import TaskList from "../Task-List/TaskList";

export default function Home() {
  return (
    <div>
      <CreateTask />
      <TaskList />
    </div>
  );
}
