import { AddTransaction } from "./Components/AddTransaction";
import { Balance } from "./Components/Balance";
import { Header } from "./Components/Header";
import IncomeExpenses from "./Components/IncomeExpenses";
import { TransactionList } from "./Components/TransactionList";
import GlobalProvider from "./Context/GlobalProvider";
import "./styles.css";

export default function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}
