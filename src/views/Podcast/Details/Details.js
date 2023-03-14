import React from "react";

//components
import { PodcastInfo, EpisodesList } from "../../../components";

//hooks
import { useParams } from "react-router-dom";
import useFetchEpisode from "../../../hooks/useFetchEpisode";

//styles
import { ContentContainer, InfoContainer } from "../styles";

//context

const Details = () => {
  let podcastDetails = null;

  const { podcastId } = useParams();

  const [episodes] = useFetchEpisode(podcastId);

  if (episodes && podcastDetails === null) {
    let episodesInfo = episodes[0];

    // const podcast = podcasts.find((pod) => {
    //   return pod.id == `${episodesInfo.collectionId}`;
    // });

    podcastDetails = {
      infoDetails: {
        collectionName: episodesInfo.collectionName,
        artistName: episodesInfo.artistName,
        artworkUrl600: episodesInfo.artworkUrl600,
        description: "podcast.summary?.label",
      },
      episodesList: episodes,
    };
  }

  if (!episodes) {
    return <ContentContainer container data-testid="podcastDetails" />;
  }

  return (
    <ContentContainer container data-testid="podcastDetails">
      <InfoContainer item xs={4}>
        <PodcastInfo
          title={
            podcastDetails ? podcastDetails.infoDetails.collectionName : ""
          }
          subtitle={podcastDetails ? podcastDetails.infoDetails.artistName : ""}
          image={podcastDetails ? podcastDetails.infoDetails.artworkUrl600 : ""}
          description={
            podcastDetails ? podcastDetails.infoDetails.description : ""
          }
        />
      </InfoContainer>
      <InfoContainer item xs={8}>
        <EpisodesList
          episodesList={podcastDetails?.episodesList || []}
        ></EpisodesList>
      </InfoContainer>
    </ContentContainer>
  );
};
export default Details;
