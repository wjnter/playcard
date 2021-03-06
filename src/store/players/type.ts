import { firstPlayer, secondPlayer, thirdPlayer, fourthPlayer } from "../../common/constants";
export const SET_PLAYER_POINTS = "SET_PLAYER_POINTS";
export const SET_PLAYER_NAME = "SET_PLAYER_NAME";

export interface IPlayerPoint {
  id: typeof firstPlayer | typeof secondPlayer | typeof thirdPlayer | typeof fourthPlayer;
  point: number;
}
export interface IPlayerName {
  id: typeof firstPlayer | typeof secondPlayer | typeof thirdPlayer | typeof fourthPlayer;
  name: string;
}

interface ISetPlayerPoints {
  type: typeof SET_PLAYER_POINTS;
  payload: IPlayerPoint;
}

interface ISetPlayerName {
  type: typeof SET_PLAYER_NAME;
  payload: IPlayerName;
}

export type PlayerActionTypes = ISetPlayerPoints | ISetPlayerName;
