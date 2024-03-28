import { render, screen } from "@testing-library/react";
import Buttons from "../Buttons";

test("should render the element correctly", () => {
  render(<Buttons />);
  const element = screen.getByRole("button", {
    name: "Buttons 1",
  });

  expect(element).toBeInTheDocument();
});
