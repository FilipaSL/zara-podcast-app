import React from "react";
import { useNavigate } from "react-router-dom";

import {
  ContentContainer,
  ImgContainer,
  InfoContainer,
  TextContainer,
  Title,
  Subtitle,
} from "./styles";

const CardItem = ({ id, title, subtitle, image }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`podcast/${id}`);
  };

  return (
    <ContentContainer key={`${id}`} data-testid="card" onClick={handleClick}>
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
