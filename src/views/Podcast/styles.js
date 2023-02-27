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

export const ViewContainer = styled(Card)`
  height: calc(${cardWidth} / 2);
  width: ${cardWidth};
  z-index: 1;
`;
