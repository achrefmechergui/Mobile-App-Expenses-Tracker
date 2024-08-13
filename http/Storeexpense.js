
import axios from "axios";
const Urllink = "https://react-native-app-e477b-default-rtdb.firebaseio.com";

export const Storeexpense = async (expensedata) => {
   const response = await axios.post(Urllink +"/expenses.json", expensedata)
   return response.data.name
};




export const Getdata = async () => {
  const response = await axios.get(Urllink +"/expenses.json");
  const expense = [];
  for (let key in response.data) {
    const result = {
      id: key,
      amount: response.data[key].amount,
      description: response.data[key].description,
      Date: new Date(response.data[key].Date),
    };
    expense.push(result);
  }
  return expense;
};




export const Updatedata = (id,expensesData)=>{
  return axios.put(Urllink+`/expenses/${id}`,expensesData)
}
