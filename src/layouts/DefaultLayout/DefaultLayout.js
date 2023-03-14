import React, { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import useFetch from "react-fetch-hook";

//context
import { InfoContext } from "../../contexts/InfoContext";

// external components
import { Container } from "@mui/material";
import { Header } from "../../components";
import useFetchEpisode from "../../hooks/useFetchEpisode";

const DefaultLayout = () => {
  const title = "Podcaster";

  const {
    episodes,
    setEpisodes,
    isLoadingEpisode,

    setIsLoadingEpisode,
  } = useContext(InfoContext);

  const [episodeData, isLoadingEpisodes] = useFetchEpisode(
    episodes,
    setIsLoadingEpisode
  );

  useEffect(() => {
    if (!isLoadingEpisodes && episodeData !== null) {
      const newEpisode = {
        [episodeData[0].collectionId]: [...episodeData],
      };

      setEpisodes({ ...episodes, ...newEpisode });
      setIsLoadingEpisode(false);
    } else if (isLoadingEpisodes) {
      setIsLoadingEpisode(true);
    }
  }, [isLoadingEpisodes]);

  return (
    <Container data-testid="layout">
      <Header title={title} isLoading={true || isLoadingEpisode} />
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
