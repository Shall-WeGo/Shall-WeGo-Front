import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { isSelectSearch } from "store";
import * as S from "./SearchAndMyBtn.style";
const SearchAndMyBtn = () => {
  const [isSelectSearchBtn, setIsSelectSearchBtn] =
    useRecoilState(isSelectSearch);

  const onClickSearchBtn = () => {
    !isSelectSearchBtn && setIsSelectSearchBtn((prev) => !prev);
  };

  const onClickMyBtn = () => {
    isSelectSearchBtn && setIsSelectSearchBtn((prev) => !prev);
  };

  return (
    <>
      <S.SearchBtn
        onClick={onClickSearchBtn}
        isSelectSearchBtn={isSelectSearchBtn}
      >
        검색
      </S.SearchBtn>
      <S.MyBtn onClick={onClickMyBtn} isSelectSearchBtn={isSelectSearchBtn}>
        My
      </S.MyBtn>
    </>
  );
};

export default SearchAndMyBtn;
