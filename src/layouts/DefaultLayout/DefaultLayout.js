import React, { useState, useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import useFetch from "react-fetch-hook";

//context
import { InfoContext } from "../../helpers/InfoContext";

// external components
import { Container } from "@mui/material";
import { Header } from "../../components";

const DefaultLayout = () => {
  const title = "Podcaster";

  const { podcasts, setPodcasts, setIsLoadingPodcasts, isLoadingEpisode } =
    useContext(InfoContext);

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )}`,
    {
      depends: [podcasts === null],
    }
  );

  useEffect(() => {
    if (!isLoading && data?.contents) {
      const { entry } = JSON.parse(data.contents).feed;
      setIsLoadingPodcasts(false);

      setPodcasts(entry);
    }
  }, [isLoading, data]);

  return (
    <Container>
      <Header title={title} isLoading={isLoading || isLoadingEpisode} />
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
