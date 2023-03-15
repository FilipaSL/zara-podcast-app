// libraries
import styled from "styled-components";

// external components
import { Card } from "@mui/material";

const cardWidth = "70vw";

export const ContentContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  margin: 2rem 1rem;
  width: ${cardWidth};
  height: fit-content;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 3vh;
  align-items: flex-start;
  padding: 2vh 2vw;
`;

export const PlayerContainer = styled.div`
  align-items: center;
  justify-content-center;
  margin: 1vh 1vw;

  & audio {
    width: 100%
  }
`;

export const Title = styled.div`
  font-size: 3vh;
  font-weight: 700;
`;

export const Subtitle = styled.div`
  color: grey;
  font-size: 2vh;
  font-style: italic;

  & a {
    color: #2f76b3;
    font-weight: 450;
    text-decoration: none;
  }
`;
