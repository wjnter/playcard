import React, { useState, useEffect } from "react";
import { TouchableOpacity, StyleSheet, Image, ImageSourcePropType } from "react-native";
import { IImportedIcon } from "../common/types";

type Props = {
  element: string;
  getChosen: (element: string) => void;
};

const ButtonIcon = ({ element, getChosen }: Props) => {
  const [isChosen, setChosen] = useState(false);
  const icon: IImportedIcon = {
    heart: require("../../assets/icon/heart.png"),
    diamond: require("../../assets/icon/diamond.png"),
    clubs: require("../../assets/icon/clubs.png"),
    spade: require("../../assets/icon/spade.png"),
    I: require("../../assets/icon/first.png"),
    II: require("../../assets/icon/second.png"),
    III: require("../../assets/icon/third.png"),
    IV: require("../../assets/icon/fourth.png"),
    unbreathable: require("../../assets/icon/unbreathable.png"),
    winImmediately: require("../../assets/icon/winImmediately.png"),
    fourOfTwin: require("../../assets/icon/fourOfTwin.png"),
    threeOfTwin: require("../../assets/icon/threeOfTwin.png"),
    fourOfKind: require("../../assets/icon/fourOfKind.png")
  };

  useEffect(() => {
    isChosen && getChosen(element);
  }, [isChosen]);

  const setBgColor = (isChosen: boolean) => {
    if (isChosen) return { backgroundColor: "#CECECE" };
    return { backgroundColor: "transparent" };
  };

  return (
    <>
      <TouchableOpacity
        style={{ ...styles.iconContainer, ...setBgColor(isChosen) }}
        onPress={() => {
          setChosen(!isChosen);
        }}
      >
        <Image style={styles.tinyLogo} source={icon[element] as ImageSourcePropType} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    borderWidth: 1,
    borderRadius: 7,
    width: 40,
    height: 40,
    marginHorizontal: 3
  },
  tinyLogo: {
    width: "70%",
    height: "70%",
    marginTop: 6,
    marginLeft: 6
  },
  bgChosen: {
    backgroundColor: "#CECECE"
  }
});

export default ButtonIcon;
