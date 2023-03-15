// libraries
import styled from "styled-components";

// external components
import { Container } from "@mui/material";
import { Link } from "react-router-dom";

export const HeaderContainer = styled(Container)`
  display: flex !important;
  flex-direction: row;
  justify-content: space-between;
  margin: 3vh 0 1vh 0;
  padding-bottom: 2vh;
  align-items: center;
  border-bottom: 1px solid lightGrey;
`;

export const HeaderTitle = styled(Link)`
  color: #2f76b3;
  font-weight: 700;

  text-decoration: none;
`;
