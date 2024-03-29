import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Details from "./Details";

import { InfoProvider } from "../../contexts/LoadingContext";

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
});
