// libraries
import styled from "styled-components";

// external components
import { Card, TableRow, TableContainer } from "@mui/material";
import { Link } from "react-router-dom";
export const StyledTableRow = styled(TableRow)(() => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#F2F2F2",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
  "&:td": {
    border: 0,
  },
}));

export const StyledLink = styled(Link)`
  color: #738eac;
  text-decoration: none;
  font-weight: 600;
`;

export const ContentContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  gap: 4vh;
`;

export const HeaderContainer = styled(Card)`
  display: flex;
  font-size: 3vh;
  font-weight: 600;
  height: 6vh;
  align-items: center;
  padding-left: 2vw;
  z-index: 1;
`;

export const InfoContainer = styled(Card)`
  display: flex;
  max-height: 65vh;
  justify-content: space-around;
  z-index: 1;
`;

export const StyledTableContainer = styled(TableContainer)`
  width: fit-content;
  margin: 1rem;
  width: 100%;
  & .MuiTableContainer-root {
    overflow-y: auto;
  }
  & .MuiTableCell-head {
    background-color: white;
    font-weight: 550;
    border: none;
  }
`;
