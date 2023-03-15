import React from "react";

//components
import { PodcastInfo, EpisodesList } from "../../components";

//hooks
import { useParams } from "react-router-dom";
import { useFetchEpisode, useFetchPodcasts } from "../../hooks";

//styles
import { ContentContainer, InfoContainer } from "./styles";

//utils
import { formatPodcastDetails, filterPodcastDescription } from "../../utils";

const Details = () => {
  const { podcastId } = useParams();

  const [episodes] = useFetchEpisode(podcastId);
  const [podcasts] = useFetchPodcasts();

  const podcastDetails = formatPodcastDetails(
    episodes ? episodes[0] : null,
    episodes ? episodes.splice(1) : null
  );

  if (!episodes) {
    return <ContentContainer container data-testid="podcastDetails" />;
  }

  return (
    <ContentContainer container data-testid="podcastDetails">
      <InfoContainer item xs={4}>
        <PodcastInfo
          title={podcastDetails.collectionName}
          subtitle={podcastDetails.artistName}
          image={podcastDetails.artworkUrl600}
          description={
            podcasts
              ? filterPodcastDescription(podcastDetails.collectionId, podcasts)
              : ""
          }
        />
      </InfoContainer>
      <InfoContainer item xs={8}>
        <EpisodesList episodesList={podcastDetails.episodesList}></EpisodesList>
      </InfoContainer>
    </ContentContainer>
  );
};
export default Details;
