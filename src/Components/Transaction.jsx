import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";
export default function Transaction({ transaction }) {
  const { deleteHandler } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  // console.log("text", transaction.text);
  // console.log('amount',transaction.amount)
  return (
    <>
      <li className={transaction.amount > 0 ? "plus" : "minus"}>
        {transaction.text}
        
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
        <button
          className="delete-btn"
          onClick={() => {
            deleteHandler(transaction.id);
          }}
        >
          x
        </button>
      </li>
    </>
  );
}
