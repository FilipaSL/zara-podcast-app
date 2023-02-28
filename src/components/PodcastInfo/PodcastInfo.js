import React from "react";

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
    <InfoContainer>
      <TopContainer href={route}>
        <ImgContainer src={image} alt="logo" />
        <TitleContainer>
          <Title>{title}</Title>
          <Subtitle>by: {subtitle}</Subtitle>
        </TitleContainer>
      </TopContainer>
      <DescriptionContainer>
        <InfoTitle>Description</InfoTitle>
        <InfoSubtitle>{description}</InfoSubtitle>
      </DescriptionContainer>
    </InfoContainer>
  );
};

export default PodcastInfo;
