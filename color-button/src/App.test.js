import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { replaceCamelWithSpaces } from "./App";
test("button has correct initial color", () => {
  render(<App />);

  const button = screen.getByRole("button", { name: "Change to MidnightBlue" });
  expect(button).toHaveStyle({ backgroundColor: "MediumVioletRed" });
});

// no need for this test since its in the test above
test("button has correct initial text", () => {
  render(<App />);
});

test("button turns MidnightBlue when clicked and changes text", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to MidnightBlue" });
  fireEvent.click(button);
  expect(button).toHaveStyle({ backgroundColor: "MidnightBlue" });
  expect(button).toHaveTextContent("Change to MediumVioletRed");
});

test("initial conditions", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: "Change to MidnightBlue" });
  // check that button is enabled if the checkbox is not clicked
  expect(button).toBeEnabled();
  const checkbox = screen.getByRole("checkbox");
  expect(checkbox).not.toBeChecked();
});

test("if checkbox is clicked button is disabled", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();
  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test("check that color button turns gray when checkbox is clicked", () => {
  render(<App />);
  const button = screen.getByRole("button");
  const checkbox = screen.getByRole("checkbox", { name: "Disable button" });
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: "gray" });
  fireEvent.click(checkbox);
  expect(button).not.toHaveStyle({ backgroundColor: "gray" });
});

//unit testing functions

describe("spaces before camel-case capital letters", () => {
  //red
  test("works for no inner capital letters", () => {
    expect(replaceCamelWithSpaces("Red")).toBe("Red");
  });
  //midnightBlue
  test("works for one inner capital letter", () => {
    expect(replaceCamelWithSpaces("MidnightBlue")).toBe("Midnight Blue");
  });
  test("works for many inner capital letters", () => {
    expect(replaceCamelWithSpaces("MediumVioletRed")).toBe("Medium Violet Red");
  });
});
