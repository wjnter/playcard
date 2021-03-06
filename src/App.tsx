import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View, ScrollView, Dimensions, Button } from "react-native";
import { connect, ConnectedProps } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import Player from "./components/Player";
// import PointSetter from "./components/PointSetter";
import { firstPlayer, secondPlayer, thirdPlayer, fourthPlayer } from "./common/constants";
import { RootState } from "./store";
import * as playerActions from "./store/players/action";
import { IPlayerPoint } from "./store/players/type";

const mapStateToProps = (state: RootState) => ({
  player: state.player
});
const mapDispatchToProps = (dispatch: Dispatch) => ({
  playerActions: bindActionCreators(playerActions, dispatch)
});

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & {};

function App(props: Props) {
  const getPlayerPoint = ({ point, id }: IPlayerPoint) => {
    const currentPoint = props.player[id].currentPoint;

    const value: IPlayerPoint = { id, point };
    const newPoint = currentPoint + point;
    value.point = newPoint;

    props.playerActions.setPoints(value);
  };

  useEffect(() => {
    console.log("store: ", props.player);
  });

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row" }}>
        <Player getPlayerPoint={getPlayerPoint} id={firstPlayer} />
        <Player getPlayerPoint={getPlayerPoint} id={secondPlayer} />
        <Player getPlayerPoint={getPlayerPoint} id={thirdPlayer} />
        <Player getPlayerPoint={getPlayerPoint} id={fourthPlayer} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* <Text>{props.playerA?.currentPoint}</Text>
        <Text>{JSON.stringify(props.playerA?.points)}</Text>
        <Text>{props.playerB?.currentPoint}</Text>
        <Text>{JSON.stringify(props.playerB?.points)}</Text> */}
        {/* {pointPlayers.map((p) => (
          <View key={p.name}>
            {p.pointList.map((pl, idx) => (
              <Text key={idx}>{pl}</Text>
            ))}
          </View>
        ))} */}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text>{JSON.stringify(props.player.first.points)}</Text>
        <Text>{JSON.stringify(props.player.second.points)}</Text>
        <Text>{JSON.stringify(props.player.third.points)}</Text>
      </ScrollView>
      {/* <PointSetter /> */}
      <StatusBar style="auto" />
    </View>
  );
}

export default connector(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40
  },
  scrollView: {
    flex: 0.6,
    backgroundColor: "#dedede",
    flexDirection: "row",
    justifyContent: "space-around",
    width: Dimensions.get("screen").width,
    marginTop: 10
  }
});
