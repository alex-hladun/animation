import React, { useState, FC, useRef } from "react";

import PickerItem from "./PickerItem";
import ColorTheme from "../../assets/ColorTheme/";
import { Text } from "../Themed";
import { View, StyleSheet, PanResponder } from "react-native";
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
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState();

  const onChooseItem = (item) => {
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
      // Ask to be the responder:
      onStartShouldSetPanResponder: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 59 ~ gestureState",
          gestureState
        );
        return true;
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
      },
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 59 ~ gestureState",
          gestureState
        );
        return true;
      },

      onPanResponderGrant: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 88 ~ gestureState",
          gestureState
        );
        return true;

        // The gesture has started. Show visual feedback so the user knows
        // what is happening!
        // gestureState.d{x,y} will be set to zero now
      },
      onPanResponderMove: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 88 ~ gestureState",
          gestureState
        );
        return true;
      },
      // The most recent move distance is gestureState.move{X,Y}
      // The accumulated gesture distance since becoming responder is
      // gestureState.d{x,y}
      onPanResponderTerminationRequest: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 88 ~ gestureState",
          gestureState
        );
        return true;
      },
      onPanResponderRelease: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 88 ~ gestureState",
          gestureState
        );
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
      },
      onShouldBlockNativeResponder: (evt, gestureState) => {
        console.log(
          "🚀 ~ file: Picker.tsx ~ line 88 ~ gestureState",
          gestureState
        );
        return true;
      }
    })
  ).current;

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
            // {...panResponder.panHandlers}
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
                  setSelectedItem={onChooseItem}
                  onTouchEnd={onTouchEnd}
                />
              ))}
            </View>
          )}
          <Text>Category: {selectedItem?.name || ""}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};
export default Picker;
