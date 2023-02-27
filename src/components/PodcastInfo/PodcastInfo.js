import React from "react";

import {
  ContentContainer,
  ImgContainer,
  InfoContainer,
  TextContainer,
  Title,
  Subtitle,
} from "./styles";

const PodcastInfo = ({ title, subtitle, image, description }) => {
  return (
    <ContentContainer>
      <ImgContainer src={image} alt="logo" />
      <TextContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContainer>
      <InfoContainer>
        <TextContainer>
          <Title>Description</Title>
          <Subtitle>{description}</Subtitle>
        </TextContainer>
      </InfoContainer>
    </ContentContainer>
  );
};

export default PodcastInfo;
