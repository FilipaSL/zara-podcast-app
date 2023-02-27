import React from "react";

import {
  ContentContainer,
  PlayerContainer,
  TextContainer,
  Title,
  Subtitle,
} from "./styles";

const EpisodePlayer = ({ title, description, sound }) => {
  return (
    <ContentContainer>
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{description}</Subtitle>
      </TextContainer>
      <PlayerContainer></PlayerContainer>
    </ContentContainer>
  );
};

export default EpisodePlayer;
