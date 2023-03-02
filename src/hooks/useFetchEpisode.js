import { useContext } from "react";
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

//context
import { InfoContext } from "../helpers/InfoContext";

const useFetchEpisode = () => {
  const { episodes, setIsLoadingEpisode } = useContext(InfoContext);
  const { podcastId } = useParams();

  let episode = episodes ? episodes[`${podcastId}`] ?? null : null;

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode&limit=200`
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
