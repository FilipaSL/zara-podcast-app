import React from "react";
import Linkify from "react-linkify";
import ReactAudioPlayer from "react-audio-player";

//styles
import {
  ContentContainer,
  PlayerContainer,
  TextContainer,
  Title,
  Subtitle,
} from "./styles";

const EpisodePlayer = ({ title, description, sound }) => {
  return (
    <ContentContainer data-testid="infoPlayer">
      <TextContainer data-testid="textTitle">
        <Title>{title}</Title>
        <Subtitle>
          <Linkify>{description}</Linkify>
        </Subtitle>
      </TextContainer>
      <PlayerContainer data-testid="player">
        <ReactAudioPlayer width="100%" src={sound} controls></ReactAudioPlayer>
      </PlayerContainer>
    </ContentContainer>
  );
};

export default EpisodePlayer;
