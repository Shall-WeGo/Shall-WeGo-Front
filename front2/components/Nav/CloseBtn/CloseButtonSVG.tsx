import React from "react";
import { useRecoilValue } from "recoil";
import { isOpenNav } from "store";

const CloseButtonSVG = () => {
  const isOpenNavState = useRecoilValue(isOpenNav);
  return (
    <>
      {isOpenNavState ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.2902 8.71005L9.70016 11.3001C9.60746 11.3926 9.53391 11.5025 9.48373 11.6234C9.43355 11.7444 9.40771 11.8741 9.40771 12.0051C9.40771 12.136 9.43355 12.2657 9.48373 12.3867C9.53391 12.5076 9.60746 12.6175 9.70016 12.7101L12.2902 15.3001C12.9202 15.9301 14.0002 15.4801 14.0002 14.5901V9.41005C14.0002 8.52005 12.9202 8.08005 12.2902 8.71005Z"
            fill="#5FC970"
          />
        </svg>
      ) : (
        <svg
          width="21"
          height="24"
          viewBox="0 0 21 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.71 15.29L11.3 12.7C11.3927 12.6075 11.4663 12.4976 11.5164 12.3766C11.5666 12.2556 11.5924 12.1259 11.5924 11.995C11.5924 11.864 11.5666 11.7343 11.5164 11.6133C11.4663 11.4924 11.3927 11.3825 11.3 11.29L8.71 8.69997C8.08 8.07997 7 8.51997 7 9.40997V14.58C7 15.48 8.08 15.92 8.71 15.29Z"
            fill="#5FC970"
          />
        </svg>
      )}
    </>
  );
};

export default CloseButtonSVG;
