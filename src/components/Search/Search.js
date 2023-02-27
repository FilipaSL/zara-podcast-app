import React from "react";

//external components
import { Input } from "@mui/material";

import { SearchContainer, ResultsContainer } from "./styles";

const Search = ({ numberOfResults, searchFilter }) => {
  return (
    <SearchContainer>
      <ResultsContainer>{numberOfResults}</ResultsContainer>
      <Input
        type="text"
        placeholder="Filter podcasts ..."
        onChange={(event) => searchFilter(event.target.value)}
      />
    </SearchContainer>
  );
};

export default Search;
