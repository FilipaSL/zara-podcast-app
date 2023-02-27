import React, { useState } from "react";

//components
import { CardItem, Search } from "../../components";

// External libraries
import { CircularProgress } from "@mui/material";

//hooks
import useFetch from "react-fetch-hook";

//styles
import { WrapperContainer, ContentContainer, ItemsContainer } from "./styles";

const Main = () => {
  const [displayItems, setDisplayItems] = useState(null);

  const { isLoading, data = [] } = useFetch(
    `https://api.allorigins.win/get?url=${encodeURIComponent(
      "https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json"
    )}`,
    {
      depends: [displayItems === null],
    }
  );

  const formatDisplayItems = (dataEntries) => {
    console.log(dataEntries[0].id.attributes["im:id"]);
    setDisplayItems(
      dataEntries.map((entryItem, index) => (
        <ItemsContainer key={index} item xs="auto">
          <CardItem
            id={entryItem.id.attributes["im:id"]}
            title={entryItem["im:name"].label}
            subtitle={entryItem["im:artist"].label}
            image={entryItem["im:image"][0].label}
            onClick={() => {}}
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
export default Main;
