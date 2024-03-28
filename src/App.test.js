import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should render App component without crashging", () => {
  render(<App />);
  const linkElement = screen.getByText('Button');
  expect(linkElement).toBeInTheDocument();
});

