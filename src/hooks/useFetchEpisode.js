import { useEffect, useContext } from "react";

import useFetch from "react-fetch-hook";
import useLocalStorage from "./useLocalSorage";
import { InfoContext } from "../contexts/InfoContext";

const useFetchEpisode = (podcastId) => {
  const { setIsLoadingEpisode } = useContext(InfoContext);

  const [episodes, setEpisodes] = useLocalStorage(
    `episode-${podcastId}`,
    `episode-${podcastId}-timestamp`,
    null
  );

  let episode = episodes ? episodes[`${podcastId}`] ?? null : null;

  const { isLoading, data = null } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=200`
    )}`,
    {
      depends: [episode === null && podcastId != null],
    }
  );

  useEffect(() => {
    if (data !== null) {
      const episodeData = episode
        ? episode
        : JSON.parse(data?.contents || JSON.stringify({ results: null }))
            ?.results;

      setEpisodes(episodeData);
    }
  }, [data]);

  useEffect(() => {
    setIsLoadingEpisode(isLoading);
  }, [isLoading]);

  return [episodes];
};

export default useFetchEpisode;
