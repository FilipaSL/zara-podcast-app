import React, { useContext } from "react";

// External libraries
import { CircularProgress } from "@mui/material";

import { HeaderContainer, HeaderTitle } from "./styles";
import { LoadingContext } from "../../contexts/LoadingContext";

const Header = () => {
  const { isLoadingPodcasts, isLoadingEpisode } = useContext(LoadingContext);

  return (
    <HeaderContainer data-testid="header">
      <HeaderTitle to={{ pathname: "/" }}>Podcaster</HeaderTitle>
      <>
        {(isLoadingPodcasts || isLoadingEpisode) && (
          <CircularProgress data-testid="loading" size={18} />
        )}
      </>
    </HeaderContainer>
  );
};

export default Header;
