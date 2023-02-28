import React from "react";

// External libraries
import { CircularProgress } from "@mui/material";

import { HeaderContainer, HeaderTitle } from "./styles";

const Header = ({ title, isLoading }) => {
  return (
    <HeaderContainer>
      <HeaderTitle href="/">{title}</HeaderTitle>{" "}
      <>{isLoading && <CircularProgress size={18} />}</>
    </HeaderContainer>
  );
};

export default Header;
