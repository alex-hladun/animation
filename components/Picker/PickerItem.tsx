import React, { FC, useRef } from "react";
import { SetStateAction } from "react-transition-group/node_modules/@types/react";
import theme from "../../assets/ColorTheme/ColorTheme";
import { Text } from "../Themed";
import {
  View,
  StyleSheet,
  Touchable,
  Pressable,
  PanResponder
} from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const classes = StyleSheet.create({
  container: {
    backgroundColor: theme.main.cream,
    display: "flex",
    justifyContent: "center",
    padding: 10
  },
  hover: {
    backgroundColor: theme.main.greyBlue
  }
});

interface Props {
  item: { name: string };
  setSelectedItem: (index: number) => void;
  onTouchEnd: (event: any) => void;
  index: number;
  hoveredItem: string;
}

const PickerItem: FC<Props> = ({
  item,
  setSelectedItem,
  index,
  onTouchEnd,
  hoveredItem
}: Props) => {
  // const classes = useStyles();

  const handleMouseUp = () => {
    console.log("hello");
    onTouchEnd();
    setSelectedItem(item);
  };

  const handleStart = (event) => console.log(event);

  return (
    <>
      <View
        style={[classes.container, item.name === hoveredItem && classes.hover]}
        onMouseUp={handleMouseUp}
        onTouchMove={handleStart}
        onTouchEnd={onTouchEnd}
      >
        <Text>{item.name}</Text>
      </View>
    </>
  );
};
export default PickerItem;
