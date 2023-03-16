import { render, screen, fireEvent } from "@testing-library/react";
import SummaryForm from "../SummaryForm";

test("initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("clicking checkbox enables button", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm orded" });
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
});
