import React, { useState, useContext } from "react";

//components
import { PodcastInfo, EpisodesList } from "../../../components";
// External libraries
import { CircularProgress } from "@mui/material";

//hooks
import useFetch from "react-fetch-hook";
import { useParams } from "react-router-dom";

//styles
import { ContentContainer, InfoContainer } from "../styles";

//context
import { InfoContext } from "../../../helpers/InfoContext";

const Details = () => {
  const [podcasts, setPodcasts] = useState(null);
  const { podcastId } = useParams();

  const stateValues = useContext(InfoContext);

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`
    )}`,
    {
      depends: [podcasts === null],
    }
  );

  if (!isLoading && data?.contents && podcasts === null) {
    const dataResults = JSON.parse(data.contents).results;

    const podcast = stateValues.podcasts.find((pod) => {
      return pod.id.attributes["im:id"] == `${dataResults[0].collectionId}`;
    });

    const podcastDetails = {
      infoDetails: {
        collectionName: dataResults[0].collectionName,
        artistName: dataResults[0].artistName,
        artworkUrl600: dataResults[0].artworkUrl600,
        description: podcast.summary?.label,
      },
      episodesList: dataResults,
    };

    setPodcasts(podcastDetails);
  }

  return (
    <>
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <ContentContainer container>
          <InfoContainer item xs={4}>
            <PodcastInfo
              title={podcasts ? podcasts.infoDetails.collectionName : ""}
              subtitle={podcasts ? podcasts.infoDetails.artistName : ""}
              image={podcasts ? podcasts.infoDetails.artworkUrl600 : ""}
              description={podcasts ? podcasts.infoDetails.description : ""}
            />
          </InfoContainer>
          <InfoContainer item xs={8}>
            <EpisodesList
              episodesList={podcasts?.episodesList || []}
            ></EpisodesList>
          </InfoContainer>
        </ContentContainer>
      )}
    </>
  );
};
export default Details;
