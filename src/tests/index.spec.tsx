import { render, screen } from "@testing-library/react";
import Login from "@/pages/index";
import "@testing-library/jest-dom";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => null,
    };
  },
}));

test("Given Login Page Component, when it has mounted, then it should render text", () => {
  render(<Login />);

  expect(screen.getByText("LOGIN")).toBeTruthy();
  expect(screen.getByText("Login")).toBeTruthy();
  expect(screen.getByTestId("email")).toBeTruthy();
  expect(screen.getByTestId("password")).toBeTruthy();
  expect(screen.getByRole("button", { name: /Login/ })).toBeDisabled();
});

test("Given Login Page Component, when it has mounted, then it should render inputs", () => {
  render(<Login />);

  expect(screen.getByTestId("email")).toBeTruthy();
  expect(screen.getByTestId("password")).toBeTruthy();
});

test("Given Login Page Component, when it has mounted, then it should render Login button", () => {
  render(<Login />);

  expect(screen.getByRole("button", { name: /Login/ })).toBeDisabled();

});
