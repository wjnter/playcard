import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { displayedText } from "../common/utils";

import ButtonIcon from "./ButtonIcon";

const elements = [
  { name: "heart" },
  { name: "diamond" },
  { name: "clubs" },
  { name: "spade" },
  { name: "I" },
  { name: "II" },
  { name: "III" },
  { name: "IV" },
  { name: "unbreathable" },
  { name: "winImmediately" },
  { name: "fourOfKind" },
  { name: "threeOfTwin" },
  { name: "fourOfTwin" }
];

type Props = {
  getStateElements: ({ element, type }: { element: string; type: string }) => void;
  type: string;
};

const HDCS = ({ getStateElements, type }: Props) => {
  const getChosen = (element: string) => {
    getStateElements({ element, type });
  };

  return (
    <View style={styles.hdcsContainer}>
      {(type === "winPigs" || type === "losePigs") && (
        <>
          <Text>{displayedText[type]}</Text>
          {elements.slice(0, 4).map(({ name }) => (
            <ButtonIcon key={name} element={name} getChosen={getChosen} />
          ))}
        </>
      )}
      {type === "victory" && (
        <>
          <Text>{displayedText[type]}</Text>
          {elements.slice(4, 8).map(({ name }) => (
            <ButtonIcon key={name} element={name} getChosen={getChosen} />
          ))}
        </>
      )}
      {type === "unbreathable" && (
        <>
          <Text>{displayedText[type]}</Text>
          <ButtonIcon key={elements[8].name} element={elements[8].name} getChosen={getChosen} />
        </>
      )}
      {type === "winImmediately" && (
        <>
          <Text>{displayedText[type]}</Text>
          <ButtonIcon key={elements[9].name} element={elements[9].name} getChosen={getChosen} />
        </>
      )}
      {(type === "winSpecialKind" || type === "loseSpecialKind") && (
        <View style={styles.wrappedRow}>
          <Text>{displayedText[type]}</Text>
          {elements.slice(10).map(({ name }) => (
            <ButtonIcon key={name} element={name} getChosen={getChosen} />
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  hdcsContainer: {
    flex: 1,
    flexDirection: "row"
  },
  wrappedRow: {
    alignItems: "center",
    flexDirection: "row"
  }
});

export default HDCS;
