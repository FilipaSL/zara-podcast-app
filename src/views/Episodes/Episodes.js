import React from "react";

//components
import { PodcastInfo, EpisodePlayer } from "../../components";

//hooks
import { useParams } from "react-router-dom";
import { useFetchEpisode, useFetchPodcasts } from "../../hooks";

//styles
import { ContentContainer, InfoContainer } from "./styles";

//utils
import { formatEpisodeInfo, filterPodcastDescription } from "../../utils";

const Episodes = () => {
  const { podcastId, episodeId } = useParams();
  const [episodes] = useFetchEpisode(podcastId);
  const [podcasts] = useFetchPodcasts();

  const episodeInfo = episodes ? episodes[0] : null;
  const desiredEpisode = episodes
    ? episodes.find((episode) => {
        return episode.trackId == episodeId;
      })
    : null;

  const episode = formatEpisodeInfo(episodeInfo, desiredEpisode);

  return (
    <ContentContainer container data-testid="podcastEpisodes">
      <InfoContainer item xs={4}>
        <PodcastInfo
          title={episode.collectionName}
          subtitle={episode.artistName}
          route={
            episode.collectionId
              ? `/podcast/${episode.collectionId}`
              : "/podcast/"
          }
          image={episode.artworkUrl600}
          description={
            podcasts
              ? filterPodcastDescription(episode.collectionId, podcasts)
              : ""
          }
        />
      </InfoContainer>
      <InfoContainer item xs={8}>
        <EpisodePlayer
          title={episode.trackName}
          description={episode.episodeDescription}
          sound={episode.episodeUrl}
        ></EpisodePlayer>
      </InfoContainer>
    </ContentContainer>
  );
};

export default Episodes;
