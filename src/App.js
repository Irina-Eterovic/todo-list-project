import "./App.css";
import EditTask from "./components/Edit-Task/EditTask";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home-Page/Home";
import TaskDetail from "./components/Task-Detail/TaskDetail";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/edit/:taskId" element={<EditTask />} />
          <Route exact path="/task/:taskId" element={<TaskDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
