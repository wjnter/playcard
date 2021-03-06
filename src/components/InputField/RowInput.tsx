import React from "react";
import { View, StyleSheet } from "react-native";
import PointInput from "./PointInput";

interface IRow {
  name: string;
}

type Props = {
  numRows: IRow[];
  getRowPoints: ({ name, value }: { name: string; value: string }) => void;
};

const RowInput = ({ numRows, getRowPoints }: Props) => {
  const getTextChange = ({ name, value }: { name: string; value: string }) => {
    getRowPoints({ name, value });
  };
  return (
    <View style={styles.rowWrapper}>
      {numRows.map((row) => (
        <PointInput
          key={row.name}
          numRows={numRows.length}
          name={row.name}
          getTextChange={getTextChange}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  rowWrapper: {
    flex: 1,
    flexDirection: "row"
  }
});
export default RowInput;
