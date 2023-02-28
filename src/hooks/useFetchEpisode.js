import React, { useState, useEffect, useContext } from "react";
import useFetch from "react-fetch-hook";

//context
import { InfoContext } from "../helpers/InfoContext";

const useFetchEpisode = (podcastId) => {
  const { episodes, setEpisodes } = useContext(InfoContext);

  let episode =
    episodes?.find((elem) => podcastId == `${elem.collectionId}`) || null;

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
    )}`,
    {
      depends: [episode === null],
    }
  );

  if (!isLoading && data?.contents && episode === null) {
    setEpisodes({ ...episodes, episode });
  }

  const isLoadingEpisodes = isLoading;
  return [isLoadingEpisodes];
};

export default useFetchEpisode;
