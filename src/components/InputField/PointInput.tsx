import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { Input, InputProps } from "react-native-elements";

type Props = InputProps & {
  getTextChange: ({ name, value }: { name: string; value: string }) => void;
  name: string;
  numRows: number;
};

const PointInput = (props: Props) => {
  const [value, onChangeText] = useState("");
  useEffect(() => {
    props.getTextChange({ name: props.name, value });
  }, [value]);
  return (
    <View style={styles.field}>
      <Text>{props.name}</Text>
      <Input
        {...props}
        leftIcon={{ type: "font-awesome", name: "chevron-left" }}
        keyboardType="decimal-pad"
        containerStyle={{ flex: 1 / props.numRows }}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  field: {
    flex: 1,
    flexDirection: "column"
  }
});

export default PointInput;
