import React from "react";
import { Outlet } from "react-router-dom";

// external components
import { Container } from "@mui/material";
import { Header } from "../../components";

const DefaultLayout = ({ children }) => {
  const title = "Podcaster";

  return (
    <Container>
      <Header title={title} />
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
