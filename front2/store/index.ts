import { atom } from "recoil";

export const isOpenNav = atom({
  key: "isOpenNavKey",
  default: false,
});

export const isSelectSearch = atom({
  key: "isSelectSearchBtn",
  default: true,
});

export const markersInfo = atom({
  key: "markersInfoKey",
  default: [],
});

export const searchKeyWord = atom({
  key: "searchKeyWordKey",
  default: "",
});

export const myAdressAtom = atom({
  key: "myAdressKey",
  default: "",
});

export const placeInfo = atom({
  key: "placeInfoKey",
  default: [],
});
