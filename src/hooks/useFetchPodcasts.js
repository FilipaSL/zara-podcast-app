import { useEffect } from "react";
import useFetch from "react-fetch-hook";
import { parsePodcastList } from "../utils";
import useLocalStorage from "./useLocalSorage";

const useFetchPodcasts = () => {
  const [podcasts, setPodcasts] = useLocalStorage(
    "podcasts",
    "timestamp",
    null
  );

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

  return [isLoading, podcasts];
};

export default useFetchPodcasts;
