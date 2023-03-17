import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Episodes from "./Episodes";

import { InfoProvider } from "../../contexts/LoadingContext";

test("Renders Episodes with correct structure", () => {
  render(
    <MemoryRouter initialEntries={["/podcast/7/episode/7"]}>
      <InfoProvider>
        <Episodes />
      </InfoProvider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("podcastEpisodes");
  expect(element).toBeInTheDocument();

  const firstChild = within(element).getByTestId("podcastInfo");
  expect(firstChild).toBeInTheDocument();

  const secondChild = within(element).getByTestId("infoPlayer");
  expect(secondChild).toBeInTheDocument();
});
