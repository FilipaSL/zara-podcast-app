import { render, screen } from "@testing-library/react";
import CardItem from "./CardItem";
import { BrowserRouter } from "react-router-dom";

test("Renders CardItem with correct structure", () => {
  render(
    <BrowserRouter path="/">
      <CardItem id={"2"} />
    </BrowserRouter>
  );
  const element = screen.getByTestId("card");
  expect(element).toBeInTheDocument();
});

test("Renders CardItem with correct img, title and subtitle", () => {
  render(
    <BrowserRouter path="/">
      <CardItem id={"2"} title={"title"} subtitle={"subtitle"} />
    </BrowserRouter>
  );
  const element = screen.getByTestId("card");
  expect(element).toHaveTextContent("title");
  expect(element).toHaveTextContent("subtitle");

  const img = screen.getByRole("img");
  expect(img).toBeInTheDocument();
});
