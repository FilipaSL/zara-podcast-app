// libraries
import styled from "styled-components";

// external components
import { Card } from "@mui/material";

const cardWidth = "15vw";

export const ContentContainer = styled.div`
  display: flex;
  position: relative;
  margin: 2rem 1rem;
  align-content: center;
  height: fit-content;
  width: fit-content;
`;

export const InfoContainer = styled(Card)`
  height: calc(${cardWidth} / 2);
  width: ${cardWidth};
  z-index: 1;
`;

export const TextContainer = styled.div`
  padding: calc(${cardWidth} / 6) 1vw 1vw 1vw;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5vw;
  align-items: center;
`;

export const PlayerContainer = styled.div``;

export const Title = styled.div`
  font-size: calc(${cardWidth} / 15); ;
`;
export const Subtitle = styled.div`
  color: grey;
  font-size: calc(${cardWidth} / 18); ;
`;
