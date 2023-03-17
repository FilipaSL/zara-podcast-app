import React from "react";
import { Outlet } from "react-router-dom";

// external components
import { Container } from "@mui/material";
import { Header } from "../../components";

const DefaultLayout = () => {
  return (
    <Container data-testid="layout">
      <Header />
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
