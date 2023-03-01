import React, { useState, useContext } from "react";

//components
import { PodcastInfo, EpisodesList } from "../../../components";

//hooks
import { useParams } from "react-router-dom";
import useFetchEpisode from "../../../hooks/useFetchEpisode";

//styles
import { ContentContainer, InfoContainer } from "../styles";

//context
import { InfoContext } from "../../../helpers/InfoContext";

const Details = () => {
  let podcastDetails = null;

  const { podcastId } = useParams();
  const { episodes, podcasts } = useContext(InfoContext);

  let episodeData = episodes ? episodes[`${podcastId}`] ?? null : null;

  if (episodeData && podcastDetails === null) {
    let episodesInfo = episodeData[0];

    const podcast = podcasts.find((pod) => {
      return pod.id.attributes["im:id"] == `${episodesInfo.collectionId}`;
    });

    podcastDetails = {
      infoDetails: {
        collectionName: episodesInfo.collectionName,
        artistName: episodesInfo.artistName,
        artworkUrl600: episodesInfo.artworkUrl600,
        description: podcast.summary?.label,
      },
      episodesList: episodeData,
    };
  }

  return (
    <ContentContainer container>
      {podcastDetails && (
        <InfoContainer item xs={4}>
          <PodcastInfo
            title={
              podcastDetails ? podcastDetails.infoDetails.collectionName : ""
            }
            subtitle={
              podcastDetails ? podcastDetails.infoDetails.artistName : ""
            }
            image={
              podcastDetails ? podcastDetails.infoDetails.artworkUrl600 : ""
            }
            description={
              podcastDetails ? podcastDetails.infoDetails.description : ""
            }
          />
        </InfoContainer>
      )}
      {podcastDetails && (
        <InfoContainer item xs={8}>
          <EpisodesList
            episodesList={podcastDetails?.episodesList || []}
          ></EpisodesList>
        </InfoContainer>
      )}
    </ContentContainer>
  );
};
export default Details;
