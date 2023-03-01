import { useContext } from "react";
import useFetch from "react-fetch-hook";

//context
import { InfoContext } from "../helpers/InfoContext";

const useFetchEpisode = (podcastId) => {
  const { episodes, setIsLoadingEpisode } = useContext(InfoContext);

  let episode = episodes ? episodes[`${podcastId}`] ?? null : null;

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
    )}`,
    {
      depends: [episode === null && podcastId != null],
    }
  );

  if (isLoading && podcastId != null && episode === null)
    setIsLoadingEpisode(true);

  if (podcastId != null && !isLoading && data !== null) {
    setIsLoadingEpisode(false);
  }

  const episodeData = episode
    ? episode
    : JSON.parse(data?.contents || JSON.stringify({ results: null }))?.results;

  return [episodeData, isLoading];
};

export default useFetchEpisode;
