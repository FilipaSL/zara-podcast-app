import { useContext } from "react";
import useFetch from "react-fetch-hook";

//context
import { InfoContext } from "../helpers/InfoContext";

const useFetchEpisode = (podcastId) => {
  const { episodes, setEpisodes, setIsLoadingEpisode } =
    useContext(InfoContext);

  let episode = episodes ? episodes[`${podcastId}`] ?? null : null;

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
    )}`,
    {
      depends: [episode === null],
    }
  );

  if (!isLoading && data?.contents && episode === null) {
    const dataResults = JSON.parse(data.contents).results;

    const newEpisode = {
      [dataResults[0].collectionId]: [...dataResults],
    };
    setIsLoadingEpisode(isLoading);
    setEpisodes({ ...episodes, ...newEpisode });
  }

  const isLoadingEpisodes = isLoading;

  const episodeData = episode
    ? episode
    : JSON.parse(data?.contents || JSON.stringify({ results: null }))?.results;

  return [episodeData, isLoadingEpisodes];
};

export default useFetchEpisode;
