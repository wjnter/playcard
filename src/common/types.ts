import { ImageSourcePropType } from "react-native";

export interface IMapPoints {
  [key: string]: number;
}

export interface IDisplayText {
  [key: string]: string;
}

export interface IState {
  type: string;
  value: number[];
}
export interface IImportedIcon {
  [key: string]: (id: string) => ImageSourcePropType;
}

export interface IChosenElement {
  element: string;
  type: string;
}

export interface IPointPlayer {
  name: string;
  point: number;
  pointList: number[];
}