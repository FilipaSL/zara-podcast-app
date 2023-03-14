import React, { createContext } from "react";

//hooks
import useLocalStorage from "../hooks/useLocalSorage";

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
