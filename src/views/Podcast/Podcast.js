const Podcast = (podcastId) => {
    const { isLoading, data = [] } = useFetch(
        `https://api.allorigins.win/get?url=${encodeURIComponent(
          `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
        )}`,
        {
          depends: [episode === null],
        }
      );
};
