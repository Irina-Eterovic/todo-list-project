import TaskDetail from "./TaskDetail";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "../../redux/store";
test("Should display task detail page", () => {
  const result = render(
    <Provider store={store}>
      <Router>
        <TaskDetail></TaskDetail>
      </Router>
    </Provider>
  );
  const title = result.getByText("Task details");
  expect(title).toBeInTheDocument();
});
