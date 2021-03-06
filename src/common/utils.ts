import { IMapPoints, IState, IDisplayText } from "./types";

const setMapPoints: IMapPoints = {
  losePigs: -1,
  unbreathable: -1,
  loseSpecialKind: -1,
  winPigs: 1,
  victory: 1,
  winImmediately: 1,
  winSpecialKind: 1
};

export const displayedText: IDisplayText = {
	winPigs: "Chặt Heo: ",
	losePigs: "Mất Heo: ",
	victory: "Tới: ",
	unbreathable: "Ùi: ",
	winImmediately: "Tới trắng: ",
	winSpecialKind: "Mất: ",
	loseSpecialKind: "Ăn: ",
};

export const POINT_MAPS: IMapPoints = {
	heart: 4,
	diamond: 3,
	clubs: 2,
	spade: 1,
	I: 3,
	II: 2,
	III: 1,
	IV: 0,
	unbreathable: 6,
	winImmediately: 6,
	fourOfKind: 6,
	threeOfTwin: 4,
	fourOfTwin: 6,
};

export const TEMP_STATE: IState[] = [
	{ type: "winPigs", value: [] },
	{ type: "losePigs", value: [] },
	{ type: "victory", value: [] },
	{ type: "unbreathable", value: [] },
	{ type: "winImmediately", value: [] },
	{ type: "winSpecialKind", value: [] },
	{ type: "loseSpecialKind", value: [] },
];

export const getMapPoints = (value: string) => setMapPoints[value];

export const calculatePoint = (acc, cur) =>
	acc + POINT_MAPS[cur.element] * getMapPoints(cur.type);
