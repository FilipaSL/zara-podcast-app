// libraries
import styled from "styled-components";

// external components
import { Card } from "@mui/material";
import { Link } from "react-router-dom";

const cardWidth = "20vw";

export const InfoContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  padding: 1vh;

  margin-top: 3vh;
  width: 20vw;
`;

export const ImgContainer = styled.img`
  display: flex;
  height: fit-content;
  max-height: calc(${cardWidth} / 1.5);
  flex: 1 1 auto;
  padding: 1vh;
  width: fit-content;
  align-items: center;
  border-radius: 5px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 1vh;
  padding-top: 2vh;
  gap: 0.2vh;
  width: 100%;
  border-top: solid lightGrey;
  align-items: flex-start;
`;

export const DescriptionContainer = styled.div`
  margin: calc(${cardWidth} / 8) 1vw 0vw 1vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.2vw;
  width: 100%;
  margin-bottom: 1vw;

  border-top: solid lightGrey;
  align-items: flex-start;
`;

export const InfoTitle = styled.div`
  font-size: calc(${cardWidth} / 19);
  margin: 1vh 0 1vh 0;
`;

export const InfoSubtitle = styled.div`
  color: grey;
  font-style: italic;
  font-size: calc(${cardWidth} / 25);

  & a {
    color: #2f76b3;
    font-weight: 450;
    text-decoration: none;
  }
`;

export const Title = styled.div`
  margin-left: 1vw;
  font-size: calc(${cardWidth} / 18);
`;

export const Subtitle = styled.div`
  color: grey;
  margin-left: 1vw;

  font-style: italic;
  font-size: calc(${cardWidth} / 25); ;
`;

export const TopContainer = styled(Link)`
  display: flex;
  height: fit-content;
  justify-content: center;
  flex-direction: column;
  width: inherit;
  text-decoration: none;
  align-items: center;
`;
