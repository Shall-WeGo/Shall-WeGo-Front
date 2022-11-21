import React from "react";
import * as S from "./SearchBar.style";
import SearchIcon from "./SearchIcon";
const SearchBar = () => {
  return (
    <S.SearchBarContainer>
      <S.SearchInput placeholder="장소, 주소, 키워드 검색" />
      <SearchIcon />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
