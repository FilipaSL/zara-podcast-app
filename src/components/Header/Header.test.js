import { render, screen, within } from "@testing-library/react";
import Header from "./Header";

test("Renders Header with Loading", () => {
  render(<Header isLoading={true} />);
  const element = screen.getByTestId("header");
  expect(element).toBeInTheDocument();

  const firstChild = within(element).getByRole("link");
  expect(firstChild).toBeInTheDocument();

  const secondChild = within(element).getByTestId("loading");
  expect(secondChild).toBeInTheDocument();
});

test("Renders Header without Loading", () => {
  render(<Header isLoading={false} />);
  const element = screen.getByTestId("header");
  expect(element).toBeInTheDocument();

  const firstChild = within(element).getByRole("link");
  expect(firstChild).toBeInTheDocument();

  expect(within(element).queryByTestId("loading")).not.toBeInTheDocument();
});

test("Click on container will trigger navigate", async () => {
  const route = "/";

  render(<Header route={route} />);

  expect(screen.getByRole("link")).toHaveAttribute("href", route);
});
