import React, { useState, useMemo } from "react";
import { StyleSheet } from "react-native";
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
    name: "Liquor - Stores",
    value: 2,
    id: "232"
  },
  { name: "Liquor - Bars", value: 2, id: "232333s" },
  {
    name: "Sports / Yoga",
    value: 2,
    id: "23d23333"
  },
  {
    name: "MM",
    value: 2,
    id: "23233"
  },
  {
    name: "VP",
    value: 2,
    id: "23233"
  },
  {
    name: "Online Subscriptions",
    value: 2,
    id: "23233"
  },
  {
    name: "Gym",
    value: 2,
    id: "23233"
  },
  {
    name: "Clothing",
    value: 2,
    id: "23233"
  },
  {
    name: "Haircuts",
    value: 2,
    id: "23233"
  },
  {
    name: "Dates",
    value: 2,
    id: "23233"
  }
];

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      {/* <ReactSpringDemo /> */}
      <Picker list={discretionaryList} categoryName="Discretionary" />
      {/* <Picker list={discretionaryList} categoryName="Discretionary" /> */}
      {/* <Picker list={discretionaryList} categoryName="Discretionary" /> */}
      <NumberEntry />
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
