import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Main from "./Main";

import { InfoProvider } from "../../contexts/LoadingContext";

test("Renders Main with correct structure", () => {
  render(
    <BrowserRouter path="/">
      <InfoProvider>
        <Main />
      </InfoProvider>
    </BrowserRouter>
  );
  const element = screen.getByTestId("main");
  expect(element).toBeInTheDocument();
});
