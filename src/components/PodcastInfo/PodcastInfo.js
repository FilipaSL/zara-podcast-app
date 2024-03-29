import React from "react";
import Linkify from "react-linkify";

import {
  ImgContainer,
  InfoContainer,
  TopContainer,
  TitleContainer,
  DescriptionContainer,
  Title,
  Subtitle,
  InfoTitle,
  InfoSubtitle,
} from "./styles";

const PodcastInfo = ({ title, subtitle, route, image, description }) => {
  return (
    <InfoContainer data-testid="podcastInfo">
      <TopContainer data-testid="containerRoute" to={route}>
        <ImgContainer data-testid="image" src={image} alt="logo" />
        <TitleContainer data-testid="containerTitle">
          <Title>{title}</Title>
          <Subtitle>by: {subtitle}</Subtitle>
        </TitleContainer>
      </TopContainer>
      <DescriptionContainer data-testid="descriptionContainer">
        <InfoTitle>Description</InfoTitle>
        <InfoSubtitle>
          <Linkify>{description}</Linkify>
        </InfoSubtitle>
      </DescriptionContainer>
    </InfoContainer>
  );
};

export default PodcastInfo;
