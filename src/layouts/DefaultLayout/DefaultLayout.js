import React, { useEffect, useContext } from "react";
import { Outlet } from "react-router-dom";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

//context
import { InfoContext } from "../../helpers/InfoContext";

// external components
import { Container } from "@mui/material";
import { Header } from "../../components";
import useFetchEpisode from "../../hooks/useFetchEpisode";

const DefaultLayout = () => {
  const title = "Podcaster";
  const { podcastId } = useParams();

  const { podcasts, setPodcasts, episodes, setEpisodes, isLoadingEpisode } =
    useContext(InfoContext);

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )}`,
    {
      depends: [podcasts === null],
    }
  );

  const [episodeData, isLoadingEpisodes] = useFetchEpisode(podcastId ?? null);

  useEffect(() => {
    if (!isLoading && data?.contents) {
      const { entry } = JSON.parse(data.contents).feed;
      setPodcasts(entry);
    }
  }, [isLoading, data]);

  useEffect(() => {
    if (!isLoadingEpisodes && episodeData) {
      const newEpisode = {
        [episodeData[0].collectionId]: [...episodeData],
      };

      setEpisodes({ ...episodes, ...newEpisode });
    }
  }, [isLoadingEpisodes]);

  return (
    <Container data-testid="layout">
      <Header title={title} isLoading={isLoading || isLoadingEpisode} />
      <Outlet />
    </Container>
  );
};

export default DefaultLayout;
