import { render, screen, within } from "@testing-library/react";

import PodcastInfo from "./PodcastInfo";

test("Renders PodcastInfo with correct structure", () => {
  render(<PodcastInfo route="/" />);
  const element = screen.getByTestId("podcastInfo");
  expect(element).toBeInTheDocument();

  const firstChild = within(element).getByTestId("containerRoute");
  expect(firstChild).toBeInTheDocument();

  let child = within(element).getByTestId("containerTitle");
  expect(child).toBeInTheDocument();

  child = within(element).getByTestId("image");
  expect(child).toBeInTheDocument();

  const secondChild = within(element).getByTestId("descriptionContainer");
  const title = within(secondChild).getByText("Description");
  expect(title).toBeInTheDocument();
});

test("Click on container will trigger navigate", async () => {
  const route = "/podcast/7";

  render(<PodcastInfo route={route} />);

  expect(screen.getByTestId("containerRoute")).toHaveAttribute("href", route);
});
