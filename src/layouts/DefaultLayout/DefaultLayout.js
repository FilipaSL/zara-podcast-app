import React from "react";
import { Outlet } from "react-router-dom";

// external components
import { Container } from "@mui/material";
import { Header } from "../../components";

const DefaultLayout = () => {
  const title = "Podcaster";

  return (
    <Container data-testid="layout">
      <Header title={title} isLoading={true} />
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
