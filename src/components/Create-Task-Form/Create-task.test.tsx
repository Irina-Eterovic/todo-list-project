import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import CreateTask from "src/components/Create-Task-Form/CreateTask";
import { store } from "../../redux/store";
import axios from "axios";

test("renders creation form", () => {
  render(
    <Provider store={store}>
      <CreateTask />
    </Provider>
  );
  const title = screen.getByText("Create new task");
  const labelTitle = screen.getByText("Title:");
  const labelDate = screen.getByText("Due date:");
  expect(title).toBeInTheDocument();
  expect(labelTitle).toBeInTheDocument();
  expect(labelDate).toBeInTheDocument();
});
test("Change if input is filled", () => {
  const r = render(
    <Provider store={store}>
      <CreateTask />
    </Provider>
  );
  const titleInput = r.getByPlaceholderText("Write task title");
  const dateInput = r.container.querySelector("#dueDate");
  fireEvent.change(titleInput, { target: { value: "Do Math Homework" } });
  fireEvent.change(dateInput!, { target: { value: "2022-01-07T09:06" } });
  expect((titleInput as HTMLInputElement).value).toBe("Do Math Homework");
  expect((dateInput as HTMLInputElement).value).toBe("2022-01-07T09:06");
});
jest.mock("axios");

test("create tasksubmit adds task to list", async () => {
  const r = render(
    <Provider store={store}>
      <CreateTask />
    </Provider>
  );
  const titleInput = r.getByPlaceholderText("Write task title");
  const dateInput = r.container.querySelector("#dueDate");

  fireEvent.change(titleInput, { target: { value: "Do Math Homework" } });
  fireEvent.change(dateInput!, { target: { value: "2022-01-07T09:06" } });
  await waitFor(() => {
    const form = r.getByTestId("form");
    fireEvent.submit(form);
  });
  expect(axios.post).toHaveBeenCalled();
});
