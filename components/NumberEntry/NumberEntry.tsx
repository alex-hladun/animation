import React, { useState, useMemo } from "react";
import { TextInput, View } from "react-native";
import { createStyles, Theme, makeStyles, Input } from "@material-ui/core";
import { Text } from "../Themed";

const classes = {
  number: {
    fontSize: 50
  }
};

const NumberEntry = () => {
  const [amount, setAmount] = useState();
  const [endNumber, setEndNumber] = useState(100);

  const onChangeAmount = (
    event: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setAmount(event.target.value);
  };

  const { start, end } = useMemo(() => {
    let start = "0";
    let end = "00";
    if (amount?.toString()) {
      end = amount.toString().substr(amount.toString().length - 2, 2);
      if (end.length === 1) {
        end = `0${end}`;
      }
      if (amount.toString().length >= 3) {
        start = amount.toString().substr(0, amount.toString().length - 2);
        console.log("🚀 ~ file: NumberEntry.tsx ~ line 44 ~ array", start, end);
      }
    } else {
    }
    return { start, end };
  }, [amount]);
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
        <TextInput value={amount} onChange={onChangeAmount} type="number" />
        <Text style={classes.number}>
          ${start}.{end}
        </Text>
      </View>
    </View>
  );
};
export default NumberEntry;
