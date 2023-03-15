import { useEffect, useContext } from "react";
import useFetch from "react-fetch-hook";
import useLocalStorage from "./useLocalStorage";

//context
import { InfoContext } from "../contexts/InfoContext";

const useFetchEpisode = (podcastId) => {
  const { setIsLoadingEpisode } = useContext(InfoContext);

  const [episode, setEpisode] = useLocalStorage(`episodes-${podcastId}`, null);

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
      setEpisode(JSON.parse(data?.contents)?.results);
    }
  }, [data]);

  useEffect(() => {
    setIsLoadingEpisode(isLoading);
  }, [isLoading]);

  return [episode?.data || null];
};

export default useFetchEpisode;
