import TaskList from "./components/Task-List/TaskList";

import "./App.css";
import EditTask from "./components/EditTask/EditTask";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<TaskList />} />
          <Route exact path="/edit/:taskId" element={<EditTask />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
