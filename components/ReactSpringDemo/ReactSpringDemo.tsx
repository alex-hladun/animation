import React, { useState, useMemo } from "react";
import { StyleSheet } from "react-native";
import { createStyles, Theme, makeStyles } from "@material-ui/core";
import { useSpring, animated, config, to } from "react-spring";
import EditScreenInfo from "./EditScreenInfo";
import { Text, View } from "../Themed";
import { RootTabScreenProps } from "../types";
import NumberEntry from "./NumberEntry/NumberEntry";
import Picker from "./Picker";
import { BudgetCategory } from "./Picker/Picker";

const classes = {
  amount: {
    fontSize: 50
  }
};

const intial = {
  color: "rgb(255, 0, 0)"
};

const final = {
  color: "#EC0B43"
};

const customConfig = {
  mass: 1,
  tension: 180,
  friction: 60
};

const discretionaryList: BudgetCategory[] = [
  {
    name: "Restauraunts / Fast Food",
    value: 2,
    id: "23"
  },
  {
    name: "Liquor Store",
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
const ReactSpringDemo = () => {
  const [colorFlip, setColorFlip] = useState(false);
  const [endNumber, setEndNumber] = useState(100);

  const [max, setMax] = useState(500);
  const [min, setMin] = useState(0);

  const toHeight = useMemo(() => {
    const newHeight = max * ((endNumber - min) / (max - min));
    // console.log("🚀 ~ file: TabOneScreen.tsx ~ line 46 ~ newHeight", newHeight);
    return newHeight;
  }, [endNumber]);

  const toColor = useMemo(() => {
    const greenPercentage = 255 * ((endNumber - 0) / (255 - 0));
    const redPercentage = 255 * ((255 - endNumber) / (255 - 0));
    const color = `rgb(${redPercentage}, ${greenPercentage}, 0)`;
    return color;
  }, [endNumber]);

  const { color, number, height } = useSpring({
    from: { color: intial.color, number: 50, height: 400 },
    color: toColor,
    number: endNumber,
    height: toHeight,
    config: config.slow
  });

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        width: "100%",
        height: "100%"
      }}
    >
      <View>
        <button onClick={() => setEndNumber(500)}>$500</button>
        <button onClick={() => setEndNumber(400)}>$400</button>
        <button onClick={() => setEndNumber(300)}>$300</button>
        <button onClick={() => setEndNumber(200)}>$200</button>
        <button onClick={() => setEndNumber(100)}>$100</button>
        <button onClick={() => setEndNumber(0)}>$0</button>
      </View>
      <View>
        <animated.div style={{ height, backgroundColor: color, width: 300 }} />
        <animated.span style={classes.amount} style={{ color }}>
          $
        </animated.span>
        <animated.span style={classes.amount} style={{ color }}>
          {number.to((n) => n.toFixed(0))}
        </animated.span>
      </View>
    </View>
  );
};
export default ReactSpringDemo;
