import React, { useState, useMemo } from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  Input,
  Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    amount: {
      fontSize: 50
    }
  })
);

const NumberEntry = () => {
  const classes = useStyles();
  const [amount, setAmount] = useState();
  const [endNumber, setEndNumber] = useState(100);

  // const { color, number, height } = useSpring({
  //   from: { color: intial.color, number: 50, height: 400 },
  //   color: toColor,
  //   number: endNumber,
  //   height: toHeight,
  //   config: config.slow
  // });

  const onChangeAmount = (
    event: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (Number(event.target.value)) {
      setAmount(event.target.value);
    }
  };

  const { start, end } = useMemo(() => {
    let start = "0";
    let end = "00";
    if (amount?.toString()) {
      end = amount.toString().substr(amount.toString().length - 2, 2);
      start = amount.toString().substr(0, amount.toString().length - 2);
      console.log("🚀 ~ file: NumberEntry.tsx ~ line 44 ~ array", start, end);
    }
    return { start, end };
  }, [amount]);
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
        <Input value={amount} onChange={onChangeAmount} />
        <Typography>
          ${start}.{end}
        </Typography>
      </div>
    </div>
  );
};
export default NumberEntry;
