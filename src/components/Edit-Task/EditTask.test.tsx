import { Provider } from "react-redux";
import EditTask from "./EditTask";
import { store } from "../../redux/store";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
jest.mock("axios");

test("Edit title renders", () => {
  const result = render(
    <Provider store={store}>
      <Router>
        <EditTask></EditTask>
      </Router>
    </Provider>
  );
  const title = result.getByText("Edit title task");
  expect(title).toBeInTheDocument();
});

test("Change if input is filled", () => {
  const result = render(
    <Provider store={store}>
      <Router>
        <EditTask></EditTask>
      </Router>
    </Provider>
  );
  const newTitleInput = result.getByPlaceholderText("Enter New Title");
  fireEvent.change(newTitleInput, {
    target: { value: "Do Math Homework pages 20-25" },
  });
  expect((newTitleInput as HTMLInputElement).value).toBe(
    "Do Math Homework pages 20-25"
  );
});

test("If form is submmited action is called", async () => {
  const result = render(
    <Provider store={store}>
      <Router>
        <EditTask></EditTask>
      </Router>
    </Provider>
  );
  const newTitleInput = result.getByPlaceholderText("Enter New Title");
  fireEvent.change(newTitleInput, {
    target: { value: "Do Math Homework pages 20-25" },
  });
  await waitFor(() => {
    const form = result.getByTestId("edit-form");
    fireEvent.submit(form);
  });
  expect(axios.patch).toHaveBeenCalled();
});
