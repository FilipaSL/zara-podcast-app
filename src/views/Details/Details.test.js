import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Details from "./Details";

import { InfoProvider } from "../../../helpers/InfoContext";

test("Renders Details with correct structure", () => {
  render(
    <MemoryRouter initialEntries={["/podcast/7"]}>
      <InfoProvider>
        <Details />
      </InfoProvider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("podcastDetails");
  expect(element).toBeInTheDocument();

  const firstChild = within(element).getByTestId("podcastInfo");
  expect(firstChild).toBeInTheDocument();

  const secondChild = within(element).getByTestId("list");
  expect(secondChild).toBeInTheDocument();
});
