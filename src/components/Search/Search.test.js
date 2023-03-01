import { render, screen } from "@testing-library/react";
import Search from "./Search";

test("Renders Search ", () => {
  render(<Search />);
  const searchElement = screen.getByTestId("search");
  expect(searchElement).toBeInTheDocument();
});

test("Renders Search with placeholder ", () => {
  render(<Search />);
  const placeholder = screen.getByPlaceholderText("Filter podcasts ...");
  expect(placeholder).toBeInTheDocument();
});

test("Renders Search with number of results ", () => {
  render(<Search />);
  const element = screen.getByTestId("results");
  expect(element).toBeInTheDocument();
});
