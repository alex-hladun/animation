import React, { useState, FC } from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  Input,
  Typography
} from "@material-ui/core";
import PickerItem from "./PickerItem";
import ColorTheme from "../../assets/theme";
import theme from "../../assets/theme";
console.log("🚀 ~ file: Picker.tsx ~ line 11 ~ ColorTheme", ColorTheme);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    number: {
      fontSize: 50
    },
    button: {
      borderRadius: "100%",
      width: 200,
      height: 200,
      backgroundColor: ColorTheme.main.blue,
      userSelect: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    listContainer: {
      position: "absolute",
      borderRadius: 40
    },
    buttonText: {
      color: ColorTheme.main.cream
    }
  })
);

export interface BudgetCategory {
  name: string;
  id: string;
  value?: number;
}

interface Props {
  list: BudgetCategory[];
  categoryName: string;
}
const Picker: FC<Props> = ({ list, categoryName }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const onChooseItem = (item) => {
    setSelectedItem(item);
  };

  const onTouchStart = (event) => {
    setOpen(true);
  };
  const onTouchEnd = (event) => {
    setOpen(false);
  };

  return (
    <>
      <div
        className={classes.button}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onTouchStart}
        onMouseUp={onTouchEnd}
      >
        <Typography className={classes.buttonText}>{categoryName}</Typography>
      </div>
      {open && (
        <div className={classes.listContainer}>
          {list.map((item, index) => (
            <PickerItem
              key={item.id}
              item={item}
              index={index}
              setSelectedItem={onChooseItem}
              onTouchEnd={onTouchEnd}
            />
          ))}
        </div>
      )}
      <Typography>Category: {selectedItem?.name || ""}</Typography>
    </>
  );
};
export default Picker;
