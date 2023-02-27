import React, { useState } from "react";

//components
import { CardItem, Search } from "../../../components";

// External libraries
import { CircularProgress } from "@mui/material";

//hooks
import useFetch from "react-fetch-hook";
import { useLocation } from "react-router-dom";

//styles
import { WrapperContainer, ContentContainer, ItemsContainer } from "./styles";

const Details = (id) => {
  const [displayItems, setDisplayItems] = useState(null);
  const { podcastId } = useLocation;
  const { isLoading, data = [] } = useFetch(
    `https://
    itunes.apple.com/lookup?id=${podcastId}
    )}`,
    {
      depends: [displayItems === null],
    }
  );

  const formatDisplayItems = (dataEntries) => {
    setDisplayItems(
      dataEntries.map((entryItem, index) => (
        <ItemsContainer key={index} item xs="auto">
          <CardItem
            title={entryItem["im:name"].label}
            subtitle={entryItem["im:artist"].label}
            image={entryItem["im:image"][0].label}
          />
        </ItemsContainer>
      ))
    );
  };

  const searchFilter = (value) => {
    if (data?.contents) {
      const { entry } = JSON.parse(data.contents).feed;

      const filteredEntries = entry.filter(
        (item) =>
          item["im:name"].label.toLowerCase().includes(value.toLowerCase()) ||
          item["im:artist"].label.toLowerCase().includes(value.toLowerCase())
      );

      formatDisplayItems(filteredEntries);
    }
  };

  if (!isLoading && data?.contents && displayItems === null) {
    const { entry } = JSON.parse(data.contents).feed;

    formatDisplayItems(entry);
  }

  return (
    <WrapperContainer>
      <Search
        numberOfResults={displayItems?.length | 0}
        searchFilter={searchFilter}
      />
      {isLoading && <CircularProgress />}
      {!isLoading && (
        <ContentContainer container>{displayItems || {}}</ContentContainer>
      )}
    </WrapperContainer>
  );
};
export default Details;
