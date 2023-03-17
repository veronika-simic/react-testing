import { render, screen } from "@testing-library/react";
import SummaryForm from "../SummaryForm";
import userEvent from '@testing-library/user-event'

test("initial conditions", () => {
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });
  expect(checkbox).not.toBeChecked();
  expect(button).toBeDisabled();
});

test("clicking checkbox enables button", async () => {
  const user = userEvent.setup();
  render(<SummaryForm />);
  const checkbox = screen.getByRole("checkbox", {
    name: "I agree to Terms and Conditions",
  });
  const button = screen.getByRole("button", { name: "Confirm order" });
  await user.click(checkbox);
  expect(button).toBeEnabled();
  await user.click(checkbox);
  expect(button).toBeDisabled();
});

test("popover responds to hover", async () => {
  const user = userEvent.setup;
  render(<SummaryForm/>);
  const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
  expect(nullPopover).toBeNull();
  

})