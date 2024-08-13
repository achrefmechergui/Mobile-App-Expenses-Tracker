import { View, Text, StyleSheet } from "react-native";
import { Globalcolor } from "../constants/styles";

// ////// using reduce with array :
// const arr = [1.225,2.123,3.156,4.159]
// const result = arr.reduce((sum,num)=>{
//   return sum+num
// },0)

// result = 10.663
// result.toFixed(2)  = 10.66
/// sum : houwa el valeur initial w hatineh yab da me 0 , num : houwa each value in the array ,
/// el methode toFixed(2) : nfaxiw beha eresultat bech tkoun feha zouz arkam baad el fassil

const Expensessummary = ({ expenses, periode }) => {
  const amount = expenses.reduce((sum, product) => {
    return sum + product.amount;
  }, 0);

  return (
    <View style={Styles.container}>
      <Text style={Styles.period}>{periode}</Text>
      <Text style={Styles.amount}>${amount.toFixed(2)}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: Globalcolor.color.primary50,
    borderRadius: 6,
  },
  period : {
    fontSize: 16,
    color : Globalcolor.color.primary400
  } , 
  amount : {
    fontSize: 16,
    color : Globalcolor.color.primary500 , 
    fontWeight : "bold"
  }
});

export default Expensessummary;
