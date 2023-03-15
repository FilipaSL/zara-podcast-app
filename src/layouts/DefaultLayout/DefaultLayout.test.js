import { render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import DefaultLayout from "./DefaultLayout";

import { InfoProvider } from "../../contexts/InfoContext";

test("Renders DefaultLayout with correct structure", () => {
  render(
    <MemoryRouter>
      <InfoProvider>
        <DefaultLayout />
      </InfoProvider>
    </MemoryRouter>
  );
  const element = screen.getByTestId("layout");
  expect(element).toBeInTheDocument();

  const firstChild = within(element).getByTestId("header");
  expect(firstChild).toBeInTheDocument();
});
