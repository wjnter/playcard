import {
  PlayerActionTypes,
  SET_PLAYER_POINTS,
  SET_PLAYER_NAME,
  IPlayerPoint,
  IPlayerName
} from "./type";

export const setPoints = (point: IPlayerPoint): PlayerActionTypes => ({
  type: SET_PLAYER_POINTS,
  payload: point
});

export const setName = (name: IPlayerName): PlayerActionTypes => ({
  type: SET_PLAYER_NAME,
  payload: name
});
