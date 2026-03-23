import { useContext, useState } from "react";
import { TransactionListContext } from "../store/transaction-list-store";
import DashboardList from "./DashboardList";

const Dashboard = () => {
  const { transactionList } = useContext(TransactionListContext);
  const [activeFilter, setActiveFilter] = useState(null);

  let totalIncome = transactionList
    .filter((transaction) => transaction.type === "Income")
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  let totalExpense = transactionList
    .filter((transaction) => transaction.type === "Expense")
    .reduce((acc, transaction) => acc + Number(transaction.amount), 0);

  let balance = totalIncome - totalExpense;

  let filteredTransaction = [];

  if (activeFilter === "Income") {
    filteredTransaction = transactionList.filter(
      (transaction) => transaction.type === "Income",
    );
  } else if (activeFilter === "Expense") {
    filteredTransaction = transactionList.filter(
      (transaction) => transaction.type === "Expense",
    );
  }

  return (
    <>
      <div className="dashboard-container container">
        <div className="inconeContainer" onClick={() => setActiveFilter("Income")}>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h1 class="card-title">Total Income</h1>
              <h3 class="card-text">{totalIncome}</h3>
            </div>
          </div>
        </div>

        <div className="inconeContainer" onClick={()=> setActiveFilter("Expense")}>
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h1 class="card-title">Total Expense</h1>
              <h3 class="card-text">{totalExpense}</h3>
            </div>
          </div>
        </div>

        <div className="inconeContainer">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h1 class="card-title">Balance</h1>
              <h3 class="card-text">{balance}</h3>
            </div>
          </div>
        </div>
      </div>
      {activeFilter && <div className="container showList">
        <DashboardList transactions={filteredTransaction}/>
      </div>}
      
    </>
  );
};

export default Dashboard;
