import { useContext, useEffect } from "react";
import useFetch from "react-fetch-hook";
import { InfoContext } from "../contexts/InfoContext";
import { parsePodcastList } from "../utils";
import useLocalStorage from "./useLocalStorage";

const useFetchPodcasts = () => {
  const { setIsLoadingPodcasts } = useContext(InfoContext);

  const [podcasts, setPodcasts] = useLocalStorage("podcasts", null);

  const { isLoading, data = null } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )}`,
    {
      depends: [podcasts === null],
    }
  );

  useEffect(() => {
    if (data !== null) setPodcasts(parsePodcastList(data));
  }, [data]);

  useEffect(() => {
    setIsLoadingPodcasts(isLoading);
  }, [isLoading]);

  return [podcasts?.data || null];
};

export default useFetchPodcasts;
