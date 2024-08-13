import { View, Text, StyleSheet, Pressable } from "react-native";
import { Globalcolor } from "../constants/styles";
import { Formatdate } from "../util/date";
import { useNavigation } from "@react-navigation/native";

const Expensesitem = ({ description, date, amount , id }) => {
  const navigation = useNavigation();
  const navigatetomanage = () => {
    navigation.navigate("manageexpenses" , {
      idPressed : id
    });
  };

  return (
    <Pressable onPress={navigatetomanage}  style={({pressed})=>{return pressed ? Styles.pressed : null}}>
      <View style={Styles.container}>
        <View style={Styles.descdatecontainer}>
          <Text style={Styles.textdescription}>{description}</Text>
          <Text style={Styles.text}>{Formatdate(date)}</Text>
        </View>
        <View style={Styles.amountcontainer}>
          <Text style={Styles.amounttext}>{amount.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const Styles = StyleSheet.create({
   pressed : {
  opacity : 0.75
   },

  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: Globalcolor.color.primary500,
    marginVertical: 12,
    borderRadius: 8,
    paddingVertical: 10,
  },
  descdatecontainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    marginHorizontal: 18,
  },
  text: {
    color: Globalcolor.color.primary50,
    marginTop: 5,
  },
  textdescription: {
    color: Globalcolor.color.primary50,
    fontWeight: "bold",
    fontSize: 16,
  },
  amountcontainer: {
    backgroundColor: "white",
    paddingHorizontal: 8,
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 15,
  },
  amounttext: {
    color: Globalcolor.color.primary500,
  },
});

export default Expensesitem;
