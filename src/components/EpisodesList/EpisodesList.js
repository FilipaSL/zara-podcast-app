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
  const displayEpisodes = episodesList.map((episode, index) => {
    const formatedDuration = new Date(episode.trackTimeMillis);
    const formatedDate = new Date(episode.releaseDate);

    if (index > 0) {
      return (
        <StyledTableRow key={index}>
          <TableCell>
            <StyledLink
              href={`/podcast/${episode.collectionId}/episodes/${episode.trackId}`}
            >
              {episode.trackName}
            </StyledLink>
          </TableCell>
          <TableCell>{`${formatedDate.toLocaleString("en-GB", {
            dateStyle: "short",
          })}`}</TableCell>
          <TableCell>{`${formatedDuration.getMinutes()}:${formatedDuration.getSeconds()}`}</TableCell>
        </StyledTableRow>
      );
    }
    return null;
  });

  return (
    <ContentContainer>
      <HeaderContainer> Episodes: {episodesList.length - 1}</HeaderContainer>
      <InfoContainer>
        <StyledTableContainer>
          <Table stickyHeader>
            <TableHead>
              <StyledTableRow>
                <TableCell>Title</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Duration</TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>{displayEpisodes}</TableBody>
          </Table>
        </StyledTableContainer>
      </InfoContainer>

      {/* <PlayerContainer></PlayerContainer> */}
    </ContentContainer>
  );
};

export default EpisodesList;
