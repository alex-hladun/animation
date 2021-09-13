import React, { useState, useMemo, FC, Dispatch } from "react";
import {
  createStyles,
  Theme,
  makeStyles,
  Input,
  Typography
} from "@material-ui/core";

import { SetStateAction } from "react-transition-group/node_modules/@types/react";
import theme from "../../assets/theme";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      backgroundColor: theme.main.cream,
      diplay: "flex",
      justifyContent: "center",
      // border: `1px solid ${theme.main.darkBlue}`,
      padding: 10,
      "&:hover": {
        backgroundColor: theme.main.greyBlue
      },
      userSelect: "none"
    }
  })
);

interface Props {
  item: { name: string };
  setSelectedItem: (index: number) => void;
  onTouchEnd: (event: any) => void;
  index: number;
}
const PickerItem: FC<Props> = ({
  item,
  setSelectedItem,
  index,
  onTouchEnd
}: Props) => {
  const classes = useStyles();

  const handleMouseUp = () => {
    onTouchEnd();
    setSelectedItem(item);
  };

  return (
    <>
      <div className={classes.container} onMouseUp={handleMouseUp}>
        <Typography>{item.name}</Typography>
      </div>
    </>
  );
};
export default PickerItem;
