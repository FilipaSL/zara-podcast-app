import React, { createContext, useState } from "react";

export const LoadingContext = createContext();

export const LoadingProvider = ({ children }) => {
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
    <LoadingContext.Provider value={stateValues}>
      {children}
    </LoadingContext.Provider>
  );
};
