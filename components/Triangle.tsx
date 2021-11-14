import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "./Themed";

interface TriangleProps {
  numberOfSides: number;
}

const Triangle: React.FC<TriangleProps> = ({ numberOfSides }) => {
  const sideC = Math.sqrt(2 - 2 * Math.cos((2 * Math.PI) / numberOfSides));
  const area = (sideC / 2) * Math.sqrt(1 - Math.pow(sideC / 2, 2));
  const polygonArea = area * numberOfSides;

  const horizontalBorderWidthStyle = {
    borderRightWidth: (sideC * 100) / 2,
    borderLeftWidth: (sideC * 100) / 2,
  };

  return (
    <>
      <View style={styles.textContainer}>
        <View>
          <Text>C: {+(360 / numberOfSides).toFixed(2)} degrees</Text>
          <Text>
            A & B: {+((180 - 360 / numberOfSides) / 2).toFixed(2)} degrees
          </Text>
        </View>
        <View>
          <Text>side a & b: 1</Text>
          <Text>side c: {+sideC.toFixed(2)}</Text>
        </View>
      </View>
      <Text>triangle area: {area}</Text>
      <Text>polygon area: {polygonArea}</Text>
      <View style={[styles.triangle, horizontalBorderWidthStyle]} />
    </>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 300,
  },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderTopWidth: 0,
    // borderRightWidth: 60,
    borderBottomWidth: 90,
    // borderLeftWidth: 60,
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderBottomColor: "thistle",
    borderLeftColor: "transparent",
  },
});

export default Triangle;
