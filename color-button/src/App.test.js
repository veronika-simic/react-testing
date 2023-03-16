import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("button has correct initial color", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to blue" });
  expect(button).toHaveStyle({ backgroundColor: "red" });
});

// no need for this test since its in the test above
test("button has correct initial text", () => {
  render(<App />);
});

test("button turns blue when clicked and changes text", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "blue" });
  expect(button).toHaveTextContent("Change to red");
});

test("initial conditions", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to blue" });
  // check that button is enabled if the checkbox is not clicked
  expect(button).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("if checkbox is clicked button is disabled", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", {name: 'Disable button'});
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});


test('check that color button turns gray when checkbox is clicked', () => {
  render(<App/>)
  const button = screen.getByRole('button');
  const checkbox = screen.getByRole('checkbox', {name: 'Disable button'});
  fireEvent(checkbox);
  expect(button).toHaveStyle({backgroundColor: 'gray'});
  fireEvent(checkbox);
  expect(button).not.toHaveStyle({backgroundColor: 'gray'})
})