export const parsePodcastList = (list) => {
  if (!list || list.length === 0) return [];

  const { entry } = JSON.parse(list.contents).feed;

  return entry.map((item) => {
    return {
      id: item.id.attributes["im:id"],
      name: item["im:name"].label,
      artist: item["im:artist"].label,
      image: item["im:image"][0].label,
      description: item.summary.label,
    };
  });
};

export const filterPodcastDescription = (id, podcasts) => {
  return podcasts.find((pod) => pod.id == id)?.description;
};

export const formatEpisodeInfo = (episodeInfo, desiredEpisode) => {
  return {
    collectionId: episodeInfo ? episodeInfo.collectionId : null,
    collectionName: episodeInfo ? episodeInfo.collectionName : "",
    artistName: episodeInfo ? episodeInfo.artistName : "",
    artworkUrl600: episodeInfo ? episodeInfo.artworkUrl600 : "",
    trackName: desiredEpisode ? desiredEpisode.trackName : "",
    episodeDescription: desiredEpisode ? desiredEpisode.description : "",
    episodeUrl: desiredEpisode ? desiredEpisode.episodeUrl : "",
  };
};

export const formatPodcastDetails = (episodeInfo, episodes) => {
  return {
    collectionId: episodeInfo ? episodeInfo.collectionId : null,
    collectionName: episodeInfo ? episodeInfo.collectionName : "",
    artistName: episodeInfo ? episodeInfo.artistName : "",
    artworkUrl600: episodeInfo ? episodeInfo.artworkUrl600 : "",
    episodesList: episodes ? episodes : [],
  };
};
