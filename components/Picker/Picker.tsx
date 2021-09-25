import React, { useState, FC, useRef } from "react";
import PickerItem from "./PickerItem";
import ColorTheme from "../../assets/ColorTheme/";
import { Text } from "../Themed";
import { View, StyleSheet, PanResponder, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const classes = StyleSheet.create({
  number: {
    fontSize: 50
  },
  button: {
    borderRadius: 100,
    width: 200,
    height: 200,
    backgroundColor: ColorTheme.main.blue,
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
});
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
  const PanObj = useRef(new Animated.ValueXY()).current;
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();
  const [hoverCategory, setHoverCategory] = useState("");

  const onChooseItem = (item) => {
    console.log("🚀 ~ file: Picker.tsx ~ line 46 ~ item", item);
    setSelectedItem(item);
  };

  const onTouchStart = (event) => {
    console.log("opening");
    setOpen(true);
  };
  const onTouchEnd = (event) => {
    setOpen(false);
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 59 ~ gestureState",
          gestureState
        );
        return true;
      },

      onMoveShouldSetPanResponder: (evt, gestureState) => {
        console.log("🚀 ~ fonMoveShouldSetPanRespondere", gestureState);
        return true;
      },
      onPanResponderGrant: (evt, gestureState) => {
        console.log("🚀 ~ onPanResponderGrant", gestureState);
        setOpen(true);
      },
      onPanResponderMove: (evt, gestureState) => {
        setHoverCategory(evt.target.textContent);
      },
      onPanResponderRelease: (evt, gestureState) => {
        setSelectedItem(evt.target.textContent);
        setOpen(false);

        console.log("🚀 ~onPanResponderRelease", evt, gestureState);
        return true;
      },
      // The user has released all touches while this view is the
      // responder. This typically means a gesture has succeeded
      onPanResponderTerminate: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 88 ~ gestureState",
          gestureState
        );
        return true;
      }
      // onShouldBlockNativeResponder: (evt, gestureState) => {
      //   return true;
      // }
    })
  ).current;
  console.log("render");
  return (
    <>
      <View>
        <TouchableOpacity>
          <View
            style={classes.button}
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
            onMouseDown={onTouchStart}
            onMouseUp={onTouchEnd}
            ref={PanObj}
            {...panResponder.panHandlers}
          >
            <Text style={classes.buttonText}>{categoryName}</Text>
          </View>
          {open && (
            <View style={classes.listContainer}>
              {list.map((item, index) => (
                <PickerItem
                  key={item.id}
                  item={item}
                  index={index}
                  hoveredItem={hoverCategory}
                  setSelectedItem={onChooseItem}
                  onTouchEnd={onTouchEnd}
                />
              ))}
            </View>
          )}
          <Text>Category: {selectedItem || ""}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Picker;
