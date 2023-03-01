import React, { useState, useContext, useEffect } from "react";

//components
import { CardItem, Search } from "../../components";

//styles
import { WrapperContainer, ContentContainer, ItemsContainer } from "./styles";
import { InfoContext } from "../../helpers/InfoContext";

const Main = () => {
  const { podcasts, isLoadingPodcasts } = useContext(InfoContext);

  const formatDisplayItems = (dataEntries) => {
    return dataEntries
      ? dataEntries.map((entryItem, index) => (
          <ItemsContainer key={index} item xs="auto">
            <CardItem
              id={entryItem.id.attributes["im:id"]}
              title={entryItem["im:name"].label}
              subtitle={entryItem["im:artist"].label}
              image={entryItem["im:image"][0].label}
            />
          </ItemsContainer>
        ))
      : null;
  };

  let [displayItems, setItems] = useState(formatDisplayItems(podcasts));

  const searchFilter = (value) => {
    if (podcasts) {
      const filteredEntries = podcasts.filter(
        (item) =>
          item["im:name"].label.toLowerCase().includes(value.toLowerCase()) ||
          item["im:artist"].label.toLowerCase().includes(value.toLowerCase())
      );

      setItems(formatDisplayItems(filteredEntries));
    }
  };

  useEffect(() => {
    setItems(formatDisplayItems(podcasts));
  }, [isLoadingPodcasts]);

  return (
    <WrapperContainer data-testid="main">
      <Search
        numberOfResults={displayItems?.length | 0}
        searchFilter={searchFilter}
      />

      <ContentContainer container>{displayItems || <></>}</ContentContainer>
    </WrapperContainer>
  );
};
export default Main;
