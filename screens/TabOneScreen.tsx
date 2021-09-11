import React, { useState, useMemo } from "react";
import { StyleSheet } from "react-native";
import { createStyles, Theme, makeStyles } from "@material-ui/core";
import { useSpring, animated, config, to } from "react-spring";
import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    amount: {
      fontSize: 50
    }
  })
);

const intial = {
  color: "#16DB93"
};

const final = {
  color: "##EC0B43"
};

const customConfig = {
  mass: 1,
  tension: 180,
  friction: 60
};
const Demo = () => {
  // useEffect(() => {
  //   console.log("config", config);
  // }, []);

  const classes = useStyles();
  const [colorFlip, setColorFlip] = useState(false);
  const [endNumber, setEndNumber] = useState(100);

  const [max, setMax] = useState(500);
  const [min, setMin] = useState(0);

  const toColor = useMemo(() => {}, []);

  const toHeight = useMemo(() => {
    const newHeight = max * ((max - endNumber) / (max - min));
    console.log("🚀 ~ file: TabOneScreen.tsx ~ line 46 ~ newHeight", newHeight);
    return newHeight;
  }, [endNumber]);

  const { color, number, height } = useSpring({
    from: { color: intial.color, number: 50, height: 400 },
    color: final.color,
    number: endNumber,
    height: toHeight,
    config: config.slow
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "flex-end",
        width: "100%",
        height: "100%"
      }}
    >
      <div>
        <button onClick={() => setEndNumber(500)}>$500</button>
        <button onClick={() => setEndNumber(100)}>$100</button>
        <button onClick={() => setEndNumber(0)}>$0</button>
      </div>
      <div>
        <animated.div style={{ height, backgroundColor: color, width: 300 }} />
        <animated.span className={classes.amount} style={{ color }}>
          $
        </animated.span>
        <animated.span className={classes.amount} style={{ color }}>
          {number.to((n) => n.toFixed(0))}
        </animated.span>
      </div>
    </div>
  );
};

export default function TabOneScreen({
  navigation
}: RootTabScreenProps<"TabOne">) {
  return (
    <View style={styles.container}>
      <Demo />
      {/* <Demo2 /> */}
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
