import { View, StyleSheet, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Iconadd = () => {
  const navigation = useNavigation();
  const navigatetomanage = () => {
    navigation.navigate("manageexpenses");
  };

  return (
    <Pressable onPress={navigatetomanage}>
      <AntDesign style={Styles.icon} name="plus" size={24} color="white" />
    </Pressable>
  );
};

const Styles = StyleSheet.create({
  icon: {
    marginRight: 15,
  },
});

export default Iconadd;
