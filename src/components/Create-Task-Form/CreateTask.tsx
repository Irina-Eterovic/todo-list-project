import axios from "axios";
import { useState } from "react";
import "./CreateTask.css";
import {
  Card,
  Button,
  CardTitle,
  CardBody,
  Form,
  Label,
  Input,
} from "reactstrap";

export default function CreateTask() {
  let [formData, setFormData] = useState({
    title: "",
    dueDate: "",
    createdDate: "",
    completed: false,
  });

  const handleChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const getCreationTime = () => {
    return new Date().toISOString();
  };

  const saveTask = async () => {
    let createdTime = getCreationTime();
    let formattedDueDate = new Date(formData.dueDate).toISOString();
    let requestBody = {
      title: formData.title,
      completed: false,
      dueDate: formattedDueDate,
      createdDate: createdTime,
    };

    await axios.post(
      " https://todo-task-web.herokuapp.com/task/create",
      requestBody
    );
  };

  return (
    <Card color="secondary" outline body className="m-4 text-center">
      <CardTitle tag="h5">Create new task</CardTitle>
      <CardBody>
        <Form onSubmit={saveTask} data-testid="form">
          <Label>Title: </Label>
          <Input
            type="text"
            name="title"
            onChange={handleChange}
            className="w-25 mx-auto"
            placeholder="Write task title"
            required
          />

          <Label>Due date: </Label>
          <Input
            type="datetime-local"
            name="dueDate"
            id="dueDate"
            onChange={handleChange}
            min={new Date().toISOString().slice(0, -8)}
            className="w-25 mx-auto"
            required
          />

          <Button type="submit" className="mt-2">
            Create
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
}
