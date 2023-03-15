import React from "react";

import {
  ContentContainer,
  ImgContainer,
  InfoContainer,
  TextContainer,
  Title,
  Subtitle,
} from "./styles";

const CardItem = ({ id, title, subtitle, image }) => {
  return (
    <ContentContainer
      key={`${id}`}
      data-testid="card"
      to={{ pathname: `podcast/${id}` }}
    >
      <ImgContainer src={image} alt="logo" />
      <InfoContainer>
        <TextContainer>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextContainer>
      </InfoContainer>
    </ContentContainer>
  );
};

export default CardItem;
