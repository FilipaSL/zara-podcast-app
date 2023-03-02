import { render, screen, within } from "@testing-library/react";
import EpisodesList from "./EpisodesList";

const episodesList = [
  {}, //first row is ignored
  {
    collectionId: "3",
    trackId: "1",
    trackTimeMillis: "1000",
    releaseDate: "2-2-2022",
    trackName: "teste",
  },
];

test("Renders EpisodesList with correct structure", () => {
  render(<EpisodesList episodesList={episodesList} />);
  const element = screen.getByTestId("list");
  expect(element).toBeInTheDocument();

  const firstChild = within(element).getByTestId("episodesNumber");
  expect(firstChild).toBeInTheDocument();

  const secondChild = within(element).getByTestId("infoTable");
  expect(secondChild).toBeInTheDocument();
});

test("Renders EpisodesList with correct episode number", () => {
  render(<EpisodesList episodesList={episodesList} />);
  const element = screen.getByTestId("episodesNumber");

  expect(element).toHaveTextContent(`Episodes: ${episodesList.length - 1}`);
});

test("Renders EpisodesList table with correct number of rows", async () => {
  render(<EpisodesList episodesList={episodesList} />);

  const element = screen.getByTestId("infoTable");
  const firstChild = within(element).getByRole("table");

  const rows = within(firstChild).getAllByRole("row");
  expect(rows.length).toBe(episodesList.length); //first row is header
});

test("Renders EpisodesList table with correct columns", async () => {
  render(<EpisodesList episodesList={episodesList} />);

  const element = screen.getByTestId("infoTable");

  const columns = within(element).getAllByRole("columnheader");
  expect(columns.length).toBe(3);

  expect(columns[0]).toHaveTextContent("Title");
  expect(columns[1]).toHaveTextContent("Date");
  expect(columns[2]).toHaveTextContent("Duration");
});

test("Renders EpisodesList table with clickable rows", async () => {
  render(<EpisodesList episodesList={episodesList} />);
  const element = screen.getByTestId("infoTable");

  const cells = within(element).getAllByRole("cell");

  expect(cells.length).toBe(3); // one for each column

  const link = within(cells[0]).getByRole("link");
  expect(link).toHaveAttribute(
    "href",
    `/podcast/${episodesList[1].collectionId}/episodes/${episodesList[1].trackId}`
  );
});

test("Renders EpisodesList table with cprrect date and time format", async () => {
  render(<EpisodesList episodesList={episodesList} />);
  const element = screen.getByTestId("infoTable");

  const cells = within(element).getAllByRole("cell");

  expect(cells[0]).toHaveTextContent(episodesList[1].trackName);
  expect(cells[1]).toHaveTextContent("02/02/2022");
  expect(cells[2]).toHaveTextContent("23:15");
});
