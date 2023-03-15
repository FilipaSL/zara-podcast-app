import React, { useContext } from "react";

// External libraries
import { CircularProgress } from "@mui/material";

import { HeaderContainer, HeaderTitle } from "./styles";
import { InfoContext } from "../../contexts/InfoContext";

const Header = ({ title }) => {
  const { isLoadingPodcasts, isLoadingEpisode } = useContext(InfoContext);

  return (
    <HeaderContainer data-testid="header">
      <HeaderTitle to={{ pathname: "/" }}>{title}</HeaderTitle>
      <>
        {(isLoadingPodcasts || isLoadingEpisode) && (
          <CircularProgress data-testid="loading" size={18} />
        )}
      </>
    </HeaderContainer>
  );
};

export default Header;
