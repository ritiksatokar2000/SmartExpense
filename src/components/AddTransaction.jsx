import { useContext, useState } from "react";
import AddExpense from "./AddIncome";
import AddIncome from "./AddExpense";
import { TransactionListContext } from "../store/transaction-list-store";

const AddTransaction = () => {
  const [form, setForm] = useState("addExpense");

  const{addIncome,addExpense} = useContext(TransactionListContext);

  const handleToggleButton = () => {
    if (form === "addExpense") {
      setForm("addIncome");
    } else {
      setForm("addExpense");
    }
  };

  return (
    <div className="trancation-container">
      <button
        type="button"
        class="btn btn-primary"
        onClick={handleToggleButton}
      >
        {form === "addExpense" ? "Switch to Income" : "Switch to Expense"}
      </button>
      

      {form === "addExpense" ? <AddIncome  /> : <AddExpense />}
      
    </div>
  );
};

export default AddTransaction;

