import { createContext, useReducer } from "react";
import { DATA } from "../dummy-data/dummy-data";
import { Getdata } from "../http/Storeexpense";

 export const Expensescontext = createContext({
  expenses: [],
  addExpense: ({ description, amount, Date }) => {},
  updateExpense: (id, { description, amount, date }) => {},
  deleteExpense: (id) => {},
  Getdata : (Data)=>{}
});

const expenseReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
   
      return [action.payload , ...state];
     
      case "SET" :
        return action.payload

    case "UPDATE":
      const updateexpenseid = state.findIndex(
        (expenses) => expenses.id === action.payload.id
      );
      const updatableexpense = state[updateexpenseid];
      const updateditem = { ...updatableexpense, ...action.payload.data }; /// chouf syntaxe hedha
      const updateexpenses = [...state];
      updateexpenses[updateexpenseid] = updateditem;
      return updateexpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);

    default:
      return state;
  }
};

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expenseReducer, []);

  const addExpense = (expenseData) => {
    dispatch({ type: "ADD", payload: expenseData });
  };

  const deleteExpense = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  const updateExpense = (id, expenseData) => {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  };

  const Getdata = (Data)=>{
    dispatch({ type : "SET" , payload : Data })
  }

   const values = {
    expenses: expensesState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
    Getdata : Getdata
   }

  return <Expensescontext.Provider value={values}  >{children}</Expensescontext.Provider>;
}

export default ExpensesContextProvider;
