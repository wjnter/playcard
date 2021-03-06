import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Dimensions,
  Button
} from "react-native";

import RowInput from "./InputField/RowInput";

import { POINT_MAPS } from "../common/utils";

const PointSetter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [points, setPoints] = useState(POINT_MAPS);
  const numRowsPigs = [
    { name: "heart" },
    { name: "diamond" },
    { name: "clubs" },
    { name: "spade" }
  ];
  const numRowsVic = [{ name: "I" }, { name: "II" }, { name: "III" }, { name: "IV" }];
  const numRowsSpecial = [{ name: "fourOfKind" }, { name: "threeOfTwin" }, { name: "fourOfTwin" }];

  const getRowPoints = ({ name, value }: { name: string; value: string }) => {
    const newPoints = {
      ...points,
      [name]: value
    };
    useState(newPoints);
  };

  useEffect(() => console.log(points));
  return (
    <View style={styles.centeredView}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text>ok see me please</Text>
      </TouchableOpacity>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <RowInput numRows={numRowsPigs} getRowPoints={getRowPoints} />
            <RowInput numRows={numRowsVic} getRowPoints={getRowPoints} />
            <RowInput numRows={numRowsSpecial} getRowPoints={getRowPoints} />
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Save</Text>
            </TouchableHighlight>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#ee6666" }}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: Dimensions.get("screen").width * 0.8,
    flex: 1
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  iconContainer: {
    width: 50,
    height: 50
  }
});

export default PointSetter;
