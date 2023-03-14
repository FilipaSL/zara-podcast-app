import React, { createContext, useState } from "react";

export const InfoContext = createContext();

export const InfoProvider = ({ children }) => {
  const [isLoadingPodcasts, setIsLoadingPodcasts] = useState(false);
  const [isLoadingEpisode, setIsLoadingEpisode] = useState(false);

  //context values
  const stateValues = {
    isLoadingPodcasts: isLoadingPodcasts,
    setIsLoadingPodcasts: setIsLoadingPodcasts,
    isLoadingEpisode: isLoadingEpisode,
    setIsLoadingEpisode: setIsLoadingEpisode,
  };

  return (
    <InfoContext.Provider value={stateValues}>{children}</InfoContext.Provider>
  );
};
