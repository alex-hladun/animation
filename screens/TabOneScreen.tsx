import React, { useState, useMemo, useRef } from "react";
import { useEffect } from "react";
import { StyleSheet, PanResponder } from "react-native";
import { createStyles, Theme, makeStyles } from "@material-ui/core";
import { useSpring, animated, config, to } from "react-spring";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import NumberEntry from "../components/NumberEntry/NumberEntry";
import Picker from "../components/Picker";
import { BudgetCategory } from "../components/Picker/Picker";
import ReactSpringDemo from "../components/ReactSpringDemo";

const useStyles = makeStyles((theme: Theme) => createStyles({}));

const discretionaryList: BudgetCategory[] = [
  {
    name: "Restauraunts / Fast Food",
    value: 2,
    id: "23"
  },
  {
    name: "Liquor",
    value: 2,
    id: "232"
  },
  {
    name: "Sports / Yoga",
    value: 2,
    id: "23d23333"
  },

  {
    name: "Online Subscriptions",
    value: 2,
    id: "2323sa3"
  },
  {
    name: "Gym",
    value: 2,
    id: "23fe233"
  },
  {
    name: "Clothing",
    value: 2,
    id: "232qef33"
  },
  {
    name: "Haircuts",
    value: 2,
    id: "23sv233"
  }
];

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<"TabOne">) {
  const [tR, setTR] = useState();

  useEffect(() => {
    const prr = PanResponder.create({
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 59 ~ gestureState",
          gestureState
        );
        return false;
      },
      // onStartShouldSetPanResponderCapture: (evt, gestureState) => {
      //   console.log(
      //     "🚀 ~ file: Picker.tsx ~ line 59 ~ gestureState",
      //     gestureState
      //   );
      //   return true;
      // },
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 59 ~ gestureState",
          gestureState
        );
        return true;

        // onPanResponderMove: (evt, gestureState) => {
        //   console.log(
        //     "🚀 ~ file: Picker.tsx ~ line 88 ~ gestureState",
        //     gestureState
        //   );
        //   return true;
        // }
      }
    });
    setTR(prr);
  }, []);

  return (
    <View style={styles.container} {...tR?.panHandlers}>
      <ReactSpringDemo />
      {/* <Picker list={discretionaryList} categoryName="Discretionary" /> */}
      {/* <Picker list={discretionaryList} categoryName="Discretionary" /> */}
      {/* <Picker list={discretionaryList} categoryName="Discretionary" /> */}
      {/* <NumberEntry /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%"
  }
});
