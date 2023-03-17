import React, { useEffect, useState } from "react";

//components
import { CardItem, Search } from "../../components";

//styles
import { WrapperContainer, ContentContainer, ItemsContainer } from "./styles";
import useFetchPodcasts from "../../hooks/useFetchPodcasts";

const Main = () => {
  const [podcasts] = useFetchPodcasts();
  const [displayItems, setItems] = useState(podcasts);

  const searchFilter = (value) => {
    if (podcasts) {
      const filteredEntries = podcasts.filter(
        (item) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.artist.toLowerCase().includes(value.toLowerCase())
      );
      setItems(filteredEntries);
    }
  };

  useEffect(() => {
    if (podcasts) {
      setItems(podcasts);
    }
  }, [podcasts]);

  return (
    <WrapperContainer data-testid="main">
      <Search
        numberOfResults={displayItems?.length}
        searchFilter={searchFilter}
      />

      <ContentContainer container>
        {displayItems ? (
          displayItems.map((entryItem, index) => (
            <ItemsContainer key={index} item xs="auto">
              <CardItem
                id={entryItem.id}
                title={entryItem.name}
                subtitle={entryItem.artist}
                image={entryItem.image}
              />
            </ItemsContainer>
          ))
        ) : (
          <></>
        )}
      </ContentContainer>
    </WrapperContainer>
  );
};
export default Main;
