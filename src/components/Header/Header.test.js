import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

import { InfoContext } from "../../contexts/InfoContext";

describe("Header component", () => {
  it("should render title correctly", () => {
    const title = "My Podcast App";
    const contextValues = { isLoadingPodcasts: true, isLoadingEpisode: false };

    render(
      <BrowserRouter>
        <InfoContext.Provider value={contextValues}>
          <Header title={title} />
        </InfoContext.Provider>
      </BrowserRouter>
    );
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  it("should render loading indicator when podcasts or episode are loading", () => {
    const contextValues = { isLoadingPodcasts: true, isLoadingEpisode: false };

    render(
      <BrowserRouter>
        <InfoContext.Provider value={contextValues}>
          <Header title="My Podcast App" />
        </InfoContext.Provider>
      </BrowserRouter>
    );
    const loadingIndicator = screen.getByTestId("loading");
    expect(loadingIndicator).toBeInTheDocument();
  });

  it("should not render loading indicator when podcasts and episode are not loading", () => {
    const contextValues = { isLoadingPodcasts: false, isLoadingEpisode: false };

    render(
      <BrowserRouter>
        <InfoContext.Provider value={contextValues}>
          <Header title="My Podcast App" />
        </InfoContext.Provider>
      </BrowserRouter>
    );
    const loadingIndicator = screen.queryByTestId("loading");
    expect(loadingIndicator).not.toBeInTheDocument();
  });
});
