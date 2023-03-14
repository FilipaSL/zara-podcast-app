import React, { createContext, useState } from "react";

//hooks
import useLocalStorage from "../hooks/useLocalSorage";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  //episodes
  const [episodes, setEpisodes] = useLocalStorage(
    "episodes",
    "episodesTimestamp",
    null
  );

  const [isLoadingEpisode, setIsLoadingEpisode] = useState(false);

  //context values
  const stateValues = {
    episodes: episodes,
    setEpisodes: setEpisodes,
    isLoadingEpisode: isLoadingEpisode,
    setIsLoadingEpisode: setIsLoadingEpisode,
  };

  return (
    <InfoContext.Provider value={stateValues}>{children}</InfoContext.Provider>
  );
};

export const PodcastContext = createContext();

export const PodcastProvider = ({ children }) => {
  //podcasts
  const [podcasts, setPodcasts] = useLocalStorage(
    "podcasts",
    "timestamp",
    null
  );

  return (
    <PodcastContext.Provider value={(podcasts, setPodcasts)}>
      {children}
    </PodcastContext.Provider>
  );
};
