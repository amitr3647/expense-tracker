import React, { useReducer, useContext, createContext } from "react";
import AppReducer from "./AppReducer";
const initialState = {
  transactions: []
};
export const GlobalContext = createContext(initialState);

//we create provider so that other components have access to the global state
export default function GlobalProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log("state", state);
  const deleteHandler = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  };
  const addHandler = (newTransaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTransaction
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteHandler,
        addHandler
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
