import { render, screen } from "@testing-library/react";
import Home from "@/pages/home";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      push: () => null,
    };
  },
}));

test("Given Home Page Component, when it has mounted, then it should render text", () => {
  render(<Home />);

  expect(screen.getByText("Home Page")).toBeTruthy();
  expect(screen.getByText("Logout")).toBeTruthy();
});
