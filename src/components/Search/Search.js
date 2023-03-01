import React from "react";

//external components
import { Input } from "@mui/material";

import { SearchContainer, ResultsContainer } from "./styles";

const Search = ({ numberOfResults, searchFilter }) => {
  return (
    <SearchContainer>
      <ResultsContainer data-testid="results">
        {numberOfResults}
      </ResultsContainer>
      <Input
        type="text"
        data-testid="search"
        placeholder="Filter podcasts ..."
        onChange={(event) => searchFilter(event.target.value)}
      />
    </SearchContainer>
  );
};

export default Search;
