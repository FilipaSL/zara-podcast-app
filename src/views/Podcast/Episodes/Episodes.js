import React from "react";

//components
import { PodcastInfo, EpisodePlayer } from "../../../components";

//hooks
import { useParams } from "react-router-dom";
import useFetchEpisode from "../../../hooks/useFetchEpisode";

//styles
import { ContentContainer, InfoContainer } from "../styles";

const Episodes = () => {
  let episode = null;
  const { podcastId, episodeId } = useParams();
  const [episodes] = useFetchEpisode(podcastId);

  if (episodes && episode === null) {
    let episodeInfo = episodes[0];

    // const podcast = podcasts.find((pod) => {
    //   return pod.id == `${episodeInfo.collectionId}`;
    // });

    const desiredEpisode = episodes.find((episode) => {
      return episode.trackId == episodeId;
    });

    const episodeDetails = {
      infoDetails: {
        collectionId: episodeInfo.collectionId,
        collectionName: episodeInfo.collectionName,
        artistName: episodeInfo.artistName,
        artworkUrl600: episodeInfo.artworkUrl600,
        description: " podcast.summary?.label",
      },
      target: desiredEpisode,
    };
    episode = episodeDetails;
  }

  return (
    <ContentContainer container data-testid="podcastEpisodes">
      <InfoContainer item xs={4}>
        <PodcastInfo
          title={episode ? episode.infoDetails.collectionName : ""}
          subtitle={episode ? episode.infoDetails.artistName : ""}
          route={
            episode
              ? `/podcast/${episode.infoDetails.collectionId}`
              : "/podcast/"
          }
          image={episode ? episode.infoDetails.artworkUrl600 : ""}
          description={episode ? episode.infoDetails.description : ""}
        />
      </InfoContainer>
      <InfoContainer item xs={8}>
        <EpisodePlayer
          title={episode ? episode.target.trackName : ""}
          description={episode ? episode.target.description : ""}
          sound={episode ? episode.target.episodeUrl : ""}
        ></EpisodePlayer>
      </InfoContainer>
    </ContentContainer>
  );
};

export default Episodes;
