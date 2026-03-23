import { useContext, useRef } from "react";
import { TransactionListContext } from "../store/transaction-list-store";

const AddIncome = () => {
  const { addIncome } = useContext(TransactionListContext);

  const incomeElement = useRef();
  const incomeTypeElement = useRef();
  const dateElement = useRef();
  const noteElement = useRef();

  const handleIncomeSubmit =(event) => {
    event.preventDefault();
    const income = incomeElement.current.value;
    const incomeType = incomeTypeElement.current.value;
    const date = dateElement.current.value;
    const note = noteElement.current.value;

    addIncome(income,incomeType,date,note);

    incomeElement.current.value="";
    incomeTypeElement.current.value="";
    dateElement.current.value="";
    noteElement.current.value="";
  }

  return (
    <form className="forms" onSubmit={handleIncomeSubmit}>
      <h3 className="text-center">Add Income</h3>
      <div class="mb-3">
        <label for="addIncome" class="form-label">
          Add Income
        </label>
        <input type="text" ref={incomeElement} class="form-control" id="addIncome" />
      </div>

      <div className="mb-3">
        <label for="incomeType" class="form-label">
          Income Type
        </label>
        <select class="form-select" ref={incomeTypeElement}  aria-label="Default select example" id="incomeType">
          <option value="salary">Salary</option>
          <option value="frelance/bonus">Frelance/Bonus</option>
          <option value="other">other</option>
        </select>
      </div>

      <div class="mb-3">
        <label for="date" class="form-label">
          Date
        </label>
        <input type="date" ref={dateElement} class="form-control" id="date" />
      </div>

      <div class="mb-3">
        <label for="note" class="form-label">
          Note
        </label>
        <input type="text" ref={noteElement} class="form-control" id="note" />
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
export default AddIncome;
