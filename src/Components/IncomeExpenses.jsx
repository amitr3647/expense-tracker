import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalProvider";

export default function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts.filter((amount) => amount >= 0);
  const expense = amounts.filter((amount) => {
    return amount < 0;
  });
  const totalIncome = income.reduce((acc, value) => acc += value, 0);
  

  const totalExpense = Math.abs(
    expense.reduce((acc, value)=> acc=acc+value, 0));

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${totalIncome}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${totalExpense}</p>
      </div>
    </div>
  );
}
