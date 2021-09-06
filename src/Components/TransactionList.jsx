import React, { useContext, useReducer } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
import Transaction from "./Transaction";
export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);
  console.log(transactions);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction transaction={transaction} key={transaction.id} />
        ))}
      </ul>
    </>
  );
};
