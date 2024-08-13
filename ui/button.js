import { View, Text, Pressable, StyleSheet } from "react-native";
import { Globalcolor } from "../constants/styles";

const Button = ({ children, style, mode, onPress }) => {
  return (
    <View style={style}>
      <Pressable onPress={onPress} style={({pressed})=>pressed &&Styles.pressed }  >
        <View
          style={[
            Styles.buttoncontainer,
            mode === "flat" && Styles.flatmodecontainer,
          ]}
        >
          <Text style={[Styles.buttontext, mode == "flat" && Styles.flattext]}>
            {" "}
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const Styles = StyleSheet.create({
  buttoncontainer: {
    backgroundColor: Globalcolor.color.primary500,
    borderRadius: 4,
    padding: 8,
  },
  flatmodecontainer: {
    backgroundColor: "transparent",
  },
  buttontext: {
    color: "white",
    textAlign: "center",
  },
  flattext: {
    color: Globalcolor.color.primary200,
  },
  pressed : {
    opacity : 0.75
  }
});

export default Button;
