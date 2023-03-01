import React from "react";

// External libraries
import { CircularProgress } from "@mui/material";

import { HeaderContainer, HeaderTitle } from "./styles";

const Header = ({ title, isLoading }) => {
  return (
    <HeaderContainer data-testid="header">
      <HeaderTitle href="/">{title}</HeaderTitle>
      <>{isLoading && <CircularProgress data-testid="loading" size={18} />}</>
    </HeaderContainer>
  );
};

export default Header;
