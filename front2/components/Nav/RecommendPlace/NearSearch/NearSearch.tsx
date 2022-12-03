import React, { useEffect, useState } from "react";
import * as N from "./NearSearch.style";
import Bank from "assets/NearSearchIcon/bank";
import Food from "assets/NearSearchIcon/food";
import Cafe from "assets/NearSearchIcon/cafe";
import Bus from "assets/NearSearchIcon/bus";
import Subway from "assets/NearSearchIcon/subway";
import Bed from "assets/NearSearchIcon/bed";
import Market from "assets/NearSearchIcon/market";
import { useSetRecoilState } from "recoil";
import { searchKeyWord } from "store";

const NearSearch = () => {
  const tag = [
    <Food />,
    <Cafe />,
    <Bus />,
    <Subway />,
    <Bed />,
    <Bank />,
    <Market />,
  ];
  const tagName = [
    "음식점",
    "카페",
    "버스",
    "지하철",
    "숙박",
    "은행",
    "편의점",
  ];

  const setSearch = useSetRecoilState(searchKeyWord);

  // const [isSelectTag, setIsSelectTag] = useState([
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  //   false,
  // ]);
  // useEffect(() => {
  //   console.log(isSelectTag);
  // });
  const onClickTag = (i: number) => {
    console.log("1", i);
    setSearch(`{구지 ${tagName[i]}}`);
    // let copy = [...isSelectTag];
    // copy[i] = true;
    // setIsSelectTag(copy);
  };
  return (
    <N.NearSearchContainer>
      <h2>주변탐색</h2>
      <N.TagList>
        {tag.map((value, i) => {
          return (
            <N.TagNameIconContainer
              key={i}
              onClick={() => {
                onClickTag(i);
              }}
            >
              <N.TagContainer>{value}</N.TagContainer>
              <p>{tagName[i]}</p>
            </N.TagNameIconContainer>
          );
        })}
      </N.TagList>
    </N.NearSearchContainer>
  );
};

export default NearSearch;
