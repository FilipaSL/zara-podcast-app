import { render, screen, within } from "@testing-library/react";
import EpisodePlayer from "./EpisodePlayer";

test("Renders EpisodePlayer with correct structure", () => {
  render(<EpisodePlayer />);
  const element = screen.getByTestId("infoPlayer");
  expect(element).toBeInTheDocument();

  const firstChild = within(element).getByTestId("textTitle");
  expect(firstChild).toBeInTheDocument();

  const secondChild = within(element).getByTestId("player");
  expect(secondChild).toBeInTheDocument();
});

test("Renders EpisodePlayer with correct title and description", () => {
  render(<EpisodePlayer title={"title"} description={"desc"} />);

  const element = screen.getByTestId("textTitle");
  expect(element).toHaveTextContent("title");
  expect(element).toHaveTextContent("desc");
});
