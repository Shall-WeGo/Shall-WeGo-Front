import React from "react";
import CloseButtonSVG from "./CloseButtonSVG";
import * as C from "./CloseBtn.style";
import { useRecoilState } from "recoil";
import { isOpenNav } from "store";
const CloseBtn = () => {
  const [isOpenNavState, setIsOpenNavState] = useRecoilState(isOpenNav);

  const onClickNavBtn = () => {
    setIsOpenNavState((prev) => !prev);
  };
  return (
    <>
      <C.CloseBtnContainer onClick={onClickNavBtn} isOpenNav={isOpenNavState}>
        <CloseButtonSVG />
      </C.CloseBtnContainer>
    </>
  );
};

export default CloseBtn;
