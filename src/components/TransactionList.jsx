import { useContext } from "react";
import Transaction from "./Transaction";
import { TransactionListContext } from "../store/transaction-list-store";

const TransactionList = () => {
  const { transactionList } = useContext(TransactionListContext);
  return (
    <>
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Sr.No</th>
              <th scope="col">Expense/Income</th>
              <th scope="col">Amount</th>
              <th scope="col">Expense Type/Income Scourse</th>
              <th scope="col">Date</th>
              <th scope="col">Note</th>
            </tr>
          </thead>
          <tbody>
            {transactionList.map((transaction) => (
              <Transaction key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TransactionList;
