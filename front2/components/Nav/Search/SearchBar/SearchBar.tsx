import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { markersInfo, searchKeyWord } from "store";
import * as S from "./SearchBar.style";
import SearchIcon from "./SearchIcon";
const SearchBar = () => {
  const setSearchKeyWord = useSetRecoilState(searchKeyWord);
  const searchPlace = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!e.keyCode == 13) return;
    setSearchKeyWord(e.target.value);
  };
  return (
    <S.SearchBarContainer>
      <S.SearchInput
        onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) =>
          searchPlace(e)
        }
        placeholder="장소, 주소, 키워드 검색"
      />
      <SearchIcon />
    </S.SearchBarContainer>
  );
};

export default SearchBar;
