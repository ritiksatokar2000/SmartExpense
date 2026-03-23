import { useContext, useRef } from "react";
import { TransactionListContext } from "../store/transaction-list-store";

const AddExpense = () => {
  const { addExpense } = useContext(TransactionListContext);

  const amountSpendElement = useRef();
  const expenseTypeElement = useRef();
  const expenseDateElement = useRef();
  const expenseNoteElement = useRef();

  const handleExpenseSubmit =(event)=> {
    event.preventDefault();
    const expense= amountSpendElement.current.value;
    const expenseType = expenseTypeElement.current.value;
    const expenseDate = expenseDateElement.current.value;
    const expenseNote = expenseNoteElement.current.value;

    addExpense(expense,expenseType, expenseDate,expenseNote);
  }

  return (
    <form className="forms" onSubmit={handleExpenseSubmit}>
      <h3 className="text-center">Add your Expense</h3>

      <div class="mb-3">
        <label for="amount" class="form-label">
          Amount Spend
        </label>
        <input type="text" ref={amountSpendElement} class="form-control" id="expenseAmount" />
      </div>
      <div className="mb-3">
        <label for="addExpense" class="form-label">
          Expense Type
        </label>
        <select class="form-select" ref={expenseTypeElement} aria-label="Default select example" id="expenseType">
          <option value="Food">Food</option>
          <option value="Shopping">Shopping</option>
          <option value="Rent">Rent</option>
          <option value="DailyNeeds">Daily Needs</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="date" class="form-label">
          Date
        </label>
        <input type="date" ref={expenseDateElement} class="form-control" id="expenseDate" />
      </div>

      <div class="mb-3">
        <label for="note" class="form-label">
          Note
        </label>
        <input type="text" ref={expenseNoteElement} class="form-control" id="expenseNote" />
      </div>

      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">
          I confaim that detail i added are correct.
        </label>
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
export default AddExpense;
