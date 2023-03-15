import React from "react";

//external components
import { Table, TableHead, TableBody, TableCell } from "@mui/material";

import {
  ContentContainer,
  StyledTableRow,
  HeaderContainer,
  InfoContainer,
  StyledTableContainer,
  StyledLink,
} from "./styles";

const EpisodesList = ({ episodesList = [] }) => {
  return (
    <ContentContainer data-testid="list">
      <HeaderContainer data-testid="episodesNumber">
        Episodes: {episodesList.length}
      </HeaderContainer>
      <InfoContainer data-testid="infoTable">
        <StyledTableContainer>
          <Table stickyHeader>
            <TableHead>
              <StyledTableRow>
                <TableCell>Title</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Duration</TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {episodesList.map((episode, index) => (
                <StyledTableRow key={index}>
                  <TableCell>
                    <StyledLink
                      to={{
                        pathname: `/podcast/${episode.collectionId}/episodes/${episode.trackId}`,
                      }}
                    >
                      {episode.trackName}
                    </StyledLink>
                  </TableCell>
                  <TableCell>{`${new Date(episode.releaseDate).toLocaleString(
                    "en-GB",
                    {
                      dateStyle: "short",
                    }
                  )}`}</TableCell>
                  <TableCell>{`${new Date(
                    episode.trackTimeMillis
                  ).getMinutes()}:${new Date(
                    episode.trackTimeMillis
                  ).getSeconds()}`}</TableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </InfoContainer>
    </ContentContainer>
  );
};

export default EpisodesList;
