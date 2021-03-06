import { PlayerActionTypes, SET_PLAYER_POINTS, SET_PLAYER_NAME } from "./type";

const initState = {
  first: {
    name: "Iron Man",
    points: [] as number[],
    currentPoint: 0
  },
  second: {
    name: "Captain America",
    points: [] as number[],
    currentPoint: 0
  },
  third: {
    name: "Doctor Strange",
    points: [] as number[],
    currentPoint: 0
  },
  fourth: {
    name: "Thor",
    points: [] as number[],
    currentPoint: 0
  }
};

export const playerReducer = (state = initState, action: PlayerActionTypes) => {
  switch (action.type) {
    case SET_PLAYER_POINTS: {
      const { id, point } = action.payload;
      const newPoint = [...state[id].points];
      newPoint.push(point);
      return {
        ...state,
        [id]: {
          ...state[id],
          currentPoint: point,
          points: newPoint
        }
      };
    }
    case SET_PLAYER_NAME: {
      const { id, name } = action.payload;
      return {
        ...state,
        [id]: { ...state[id], name }
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
};
