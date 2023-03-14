import React, { createContext } from "react";

//hooks
import useLocalStorage from "../hooks/useLocalSorage";

export const EpisodesContext = createContext();

export const EpisodesProvider = ({ children }) => {
  //episodes
  const [episodes, setEpisodes] = useLocalStorage(
    "episodes",
    "episodesTimestamp",
    null
  );

  return (
    <EpisodesContext.Provider value={(episodes, setEpisodes)}>
      {children}
    </EpisodesContext.Provider>
  );
};
