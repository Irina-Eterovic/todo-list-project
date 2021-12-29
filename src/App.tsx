import "./App.css";
import EditTask from "./components/Edit-Task/EditTask";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home-Page/Home";
import TaskDetail from "./components/Task-Detail/TaskDetail";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit/:taskId" element={<EditTask />} />
          <Route path="/task/:taskId" element={<TaskDetail />} />
        </Routes>
      </Router>
    </div>
  );
}
