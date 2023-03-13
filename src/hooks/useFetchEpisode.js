import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

const useFetchEpisode = (episodes, setIsLoadingEpisode) => {
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

  const episodeData = episode
    ? episode
    : JSON.parse(data?.contents || JSON.stringify({ results: null }))?.results;

  return [episodeData, isLoading];
};

export default useFetchEpisode;
