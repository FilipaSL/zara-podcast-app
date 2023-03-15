import React from "react";
import { render, screen } from "@testing-library/react";
import EpisodesList from "./EpisodesList";
import { MemoryRouter } from "react-router-dom";

describe("EpisodesList", () => {
  it("renders the list of episodes", () => {
    const episodesList = [
      {
        collectionId: 1,
        trackId: 1,
        trackName: "Episode 1",
        releaseDate: "2022-01-01T00:00:00.000Z",
        trackTimeMillis: 60000,
      },
    ];

    render(
      <MemoryRouter>
        <EpisodesList episodesList={episodesList} />
      </MemoryRouter>
    );

    const episodesNumber = screen.getByTestId("episodesNumber");
    expect(episodesNumber).toHaveTextContent("Episodes: 1");

    const link1 = screen.getByTestId("link");
    expect(link1).toHaveTextContent("Episode 1");
    expect(link1).toHaveAttribute("href", "/podcast/1/episodes/1");
  });
});
