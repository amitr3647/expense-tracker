import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0);
  console.log("amounts", amounts);
  console.log("total", total);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
};
