import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Globalcolor } from "../constants/styles";



import { Expensescontext } from "../Store/expenses-context";
import Expenseform from "../manageexpense/expenseform";

const Manageexpense = ({ route, navigation }) => {
  const checkid = route.params?.idPressed;
  const expensectx = useContext(Expensescontext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: checkid ? "Edit" : "Add",
    });
  }, [navigation, checkid]);

;

  return (
 
        <View style={Styles.container}  >
          <Expenseform checkid={checkid} navigation={navigation} />
        </View>
   
  );
};

export default Manageexpense;

const Styles = StyleSheet.create({
  container : {
    flex : 1 ,
    backgroundColor: Globalcolor.color.primary800,
    padding: 28,
  }

});
