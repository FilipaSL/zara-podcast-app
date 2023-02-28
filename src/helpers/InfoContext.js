import React, { createContext, useState } from "react";

//hooks
import useLocalStorage from "../hooks/useLocalSorage";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  //podcasts
  const [podcasts, setPodcasts] = useLocalStorage(
    "podcasts",
    "timestamp",
    null
  );

  const [isLoadingPodcasts, setIsLoadingPodcasts] = useState(!podcasts);

  //episodes
  const [episodes, setEpisodes] = useLocalStorage("episodes", null);
  const [isLoadingEpisode, setIsLoadingEpisode] = useState(!episodes);

  //context values
  const stateValues = {
    podcasts: podcasts,
    setPodcasts: setPodcasts,
    isLoadingPodcasts: isLoadingPodcasts,
    setIsLoadingPodcasts: setIsLoadingPodcasts,

    episodes: episodes,
    setEpisodes: setEpisodes,
    isLoadingEpisode: isLoadingEpisode,
    setIsLoadingEpisode: setIsLoadingEpisode,
  };

  return (
    <InfoContext.Provider value={stateValues}>{children}</InfoContext.Provider>
  );
};
