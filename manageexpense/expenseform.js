import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import Form from "./form";
import { useState, useContext } from "react";
import Button from "../ui/button";
import { Expensescontext } from "../Store/expenses-context";
import { Globalcolor } from "../constants/styles";
import { Entypo } from "@expo/vector-icons";
import { Storeexpense, Updatedata } from "../http/Storeexpense";

const Expenseform = ({ navigation, checkid }) => {
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const expensectx = useContext(Expensescontext);

  const handelamountchange = (entredvalue) => {
    setAmount(entredvalue);
  };
  const handeldatechange = (entredvalue) => {
    setDate(entredvalue);
  };
  const handeldescriptionchange = (entredvalue) => {
    setDescription(entredvalue);
  };

  const confirmhandler = async () => {
    const converttonumber = parseFloat(amount); // Use parseFloat to handle decimal values

    // const amountIsValid = !isNaN(converttonumber) && converttonumber > 0;
    // const dateIsValid = new Date(date).toString() !== "Invalid Date";
    // const descriptionIsValid = description.trim().length > 0;

    const id = await Storeexpense({
      amount: converttonumber,
      Date: new Date(date),
      description: description,
    });

    expensectx.addExpense({
      id: id,
      amount: converttonumber,
      Date: new Date(date),
      description: description,
    });

    navigation.goBack();
  };

  const updatehandler = () => {
    expensectx.updateExpense(checkid, {
      amount: parseFloat(amount), // Ensure the entered amount is a number
      Date: new Date(date),
      description: description,
    });

    navigation.goBack();
  };

  const deleteexpensehandler = () => {
    expensectx.deleteExpense(checkid);

    navigation.goBack();
  };

  const cancelhandler = () => {
    navigation.goBack();
  };

  return (
    <View style={Styles.container}>
      {checkid && (
        <View>
          <Form
            label="Amount"
            Textinputconfig={{
              keyboardType: "decimal-pad",
              onChangeText: handelamountchange,
              value: amount,
            }}
          />
          <Form
            label="Date"
            Textinputconfig={{
              placeholder: "YYYY-MM-DD",
              onChangeText: () => {},
              maxLength: 10,
              onChangeText: handeldatechange,
              value: date,
            }}
          />
          <Form
            label="Description"
            Textinputconfig={{
              multiline: true,
              onChangeText: handeldescriptionchange,
              value: description,
              // autoCapitalize : "none" ,
              // autoCorrect : true ,  //// default : false
            }}
          />
          <View>
            <View style={Styles.buttoncontainer}>
              <Button
                onPress={cancelhandler}
                style={Styles.adjustbutton}
                mode="flat"
              >
                cancel
              </Button>
              <Button onPress={updatehandler} style={Styles.adjustbutton}>
                {" "}
                update
              </Button>
            </View>
            <Pressable onPress={deleteexpensehandler}>
              <View style={Styles.trashcontainet}>
                <Entypo
                  name="trash"
                  size={28}
                  color={Globalcolor.color.error500}
                />
              </View>
            </Pressable>
          </View>
        </View>
      )}

      {!checkid && (
        <View>
          <Form
            label="Amount"
            Textinputconfig={{
              keyboardType: "decimal-pad",
              onChangeText: handelamountchange,
              value: amount,
            }}
          />
          <Form
            label="Date"
            Textinputconfig={{
              placeholder: "YYYY-MM-DD",
              onChangeText: () => {},
              maxLength: 10,
              onChangeText: handeldatechange,
              value: date,
            }}
          />
          <Form
            label="Description"
            Textinputconfig={{
              multiline: true,
              onChangeText: handeldescriptionchange,
              value: description,
              // autoCapitalize : "none" ,
              // autoCorrect : true ,  //// default : false
            }}
          />
          <View style={Styles.buttoncontainer}>
            <Button
              onPress={cancelhandler}
              style={Styles.adjustbutton}
              mode="flat"
            >
              cancel
            </Button>
            <Button onPress={confirmhandler} style={Styles.adjustbutton}>
              Add
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

const Styles = StyleSheet.create({
  buttoncontainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
    marginTop: 20,
  },
  adjustbutton: {
    marginHorizontal: 10,
    minWidth: 120,
  },

  container: {},
  trashcontainet: {
    alignItems: "center",
    borderTopWidth: 2,
    paddingTop: 16,
    marginTop: 8,
    borderTopColor: Globalcolor.color.primary200,
  },
});

export default Expenseform;
