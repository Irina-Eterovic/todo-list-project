import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

test("header contains Home", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const linkElement = screen.getByText("Home");
  expect(linkElement).toBeInTheDocument();
});
