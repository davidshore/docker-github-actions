import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "./page";

test("loads and displays greeting", async () => {
  // ARRANGE
  render(<Page />);

  // ACT
  // await userEvent.click(screen.getByText("Load Greeting"));
  // await screen.findByRole("heading");

  // ASSERT
  expect(screen.getByRole("heading")).toHaveTextContent("hello there");
  expect(screen.getByRole("button")).toBeDisabled();
});
