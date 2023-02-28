import React, { useState, useContext } from "react";

//components
import { PodcastInfo, EpisodePlayer } from "../../../components";

// External libraries
import { CircularProgress } from "@mui/material";

//hooks
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

//styles
import { ContentContainer, InfoContainer } from "../styles";

//context
import { InfoContext } from "../../../helpers/InfoContext";

const Episodes = () => {
  const [episode, setEpisode] = useState(null);
  const { podcastId, episodeId } = useParams();

  const stateValues = useContext(InfoContext);

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
    )}`,
    {
      depends: [episode === null],
    }
  );

  if (!isLoading && data?.contents && episode === null) {
    const dataResults = JSON.parse(data.contents).results;

    let episodeInfo = dataResults[0];

    const podcast = stateValues.podcasts.find((pod) => {
      return pod.id.attributes["im:id"] == `${episodeInfo.collectionId}`;
    });

    const desiredEpisode = dataResults.find((episode) => {
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
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <ContentContainer container>
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
      )}
    </>
  );
};
export default Episodes;
