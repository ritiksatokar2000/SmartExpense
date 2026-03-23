import { useContext } from "react";
import { AiFillDelete } from "react-icons/ai";
import { TransactionListContext } from "../store/transaction-list-store";

const Transaction = ({ transaction }) => {
  const {deleteTransaction}=useContext(TransactionListContext);
  return (
    <tr>
      <td>{transaction.srNo}</td>
      <td>{transaction.type}</td>
      <td>{transaction.amount}</td>
      <td>{transaction.source}</td>
      <td>{transaction.date}</td>
      <td>{transaction.note}</td>
      <td>
        <button className="btn btn-danger" onClick={()=> deleteTransaction(transaction.id) } ><AiFillDelete /></button>
      </td>
    </tr>
  );
};
export default Transaction;
