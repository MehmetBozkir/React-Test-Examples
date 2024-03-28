import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render App component without crashging", () => {
  render(<App />);
  const linkElement = screen.getByText("Button");
  expect(linkElement).toBeInTheDocument();
});

test("should render the element correctly", async () => {
  const user = userEvent.setup();
  render(<App />);

  user.pointer({
    keys: "[NouseLeft]",
    target: screen.getByRole("button", { name: "Inc" }),
  });

  expect(screen.getByRole("heading")).toHaveTextContent("1");
});
