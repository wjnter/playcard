import React, { useState, useEffect } from "react";
import {
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  Image
} from "react-native";

import HDCS from "./HDCS";
import { POINT_MAPS, TEMP_STATE, getMapPoints } from "../common/utils";
import { IChosenElement } from "../common/types";
import { firstPlayer, secondPlayer, thirdPlayer, fourthPlayer } from "../common/constants";
import { IPlayerPoint } from "../store/players/type";

type Props = {
  id: typeof firstPlayer | typeof secondPlayer | typeof thirdPlayer | typeof fourthPlayer;
  getPlayerPoint: ({ point, id }: IPlayerPoint) => void;
};

const Player = ({ getPlayerPoint, id }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [chosenEl, setChosenEl] = useState<IChosenElement[]>([]);
  const [turn, setTurn] = useState(0);
  const getStateElements = ({ element, type }: { element: string; type: string }) => {
    const state = [...chosenEl];
    const idx = state.findIndex((item) => item.element === element && item.type === type);
    // DUPLICATED ITEM => NEED TO FIX THIS ISSUE
    if (idx === -1) {
      state.push({ element, type });
    }
    setChosenEl(state);
  };
  const handleUpdatePoint = () => {
    setTurn(turn + 1);
    setModalVisible(false);
  };
  useEffect(() => {
    const point = chosenEl.reduce(
      (acc, cur) => acc + POINT_MAPS[cur.element] * getMapPoints(cur.type),
      0
    );
    getPlayerPoint({ point, id });
    // reset chosen elements when finish calculation
    setChosenEl([]);
  }, [turn]);
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {TEMP_STATE.map((hdcs) => (
              <HDCS key={hdcs.type} getStateElements={getStateElements} type={hdcs.type} />
            ))}
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={handleUpdatePoint}
            >
              <Text style={styles.textStyle}>Save</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.iconContainer} onPress={() => setModalVisible(true)}>
        <Text>{id}</Text>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../../assets/icon/user.png")}
        />
      </TouchableOpacity>
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
    elevation: 5
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

export default Player;
