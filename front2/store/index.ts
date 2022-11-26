import { atom } from "recoil";

export const isOpenNav = atom({
  key: "isOpenNav",
  default: false,
});

export const isSelectSearch = atom({
  key: "isSelectSearchBtn",
  default: true,
});

export const markersInfo: any = atom({
  key: "markers",
  default: [],
});
