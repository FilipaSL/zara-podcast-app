import React, { useState, useContext } from "react";

//components
import { PodcastInfo, EpisodePlayer } from "../../../components";

//hooks
import { useParams } from "react-router-dom";
import useFetchEpisode from "../../../hooks/useFetchEpisode";

//styles
import { ContentContainer, InfoContainer } from "../styles";

//context
import { InfoContext } from "../../../helpers/InfoContext";

const Episodes = () => {
  const [episode, setEpisode] = useState(null);

  const { podcastId, episodeId } = useParams();

  const { episodes, isLoadingEpisodes, podcasts } = useContext(InfoContext);
  let episodeData = episodes ? episodes[`${podcastId}`] ?? null : null;

  if (!isLoadingEpisodes && episodeData && episode === null) {
    let episodeInfo = episodeData[0];

    const podcast = podcasts.find((pod) => {
      return pod.id.attributes["im:id"] == `${episodeInfo.collectionId}`;
    });

    const desiredEpisode = episodeData.find((episode) => {
      return episode.trackId == episodeId;
    });

    const episodeDetails = {
      infoDetails: {
        collectionId: episodeInfo.collectionId,
        collectionName: episodeInfo.collectionName,
        artistName: episodeInfo.artistName,
        artworkUrl600: episodeInfo.artworkUrl600,
        description: podcast.summary?.label,
      },
      target: desiredEpisode,
    };
    setEpisode(episodeDetails);
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
