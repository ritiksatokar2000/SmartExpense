import { createContext, useReducer, useState } from "react";

export const TransactionListContext = createContext({
  transactionList: [],
  addIncome: () => {},
  addExpense: () => {},
  deleteTransaction: () => {},
});

const transactionListReducer = (currTransactionList, action) => {
  let newList = currTransactionList;
  if (action.type === "ADD_INCOME") {
    newList = [action.payload, ...currTransactionList];
  } else if (action.type === "ADD_EXPENSE") {
    newList = [action.payload, ...currTransactionList];
  } else if (action.type === "DELETE_TRANSACTION") {
    newList = currTransactionList.filter(
      (transaction) => transaction.id !== action.payload.trancationId,
    );
  
  }
  return newList;
};

const TransactionListProvider = ({ children }) => {
  const [transactionList, dispatchTransactionList] = useReducer(
    transactionListReducer,
    [],
  );

  const addIncome = (income, incomeType, date, note) => {
    dispatchTransactionList({
      type: "ADD_INCOME",
      payload: {
        id: Date.now(),
        srNo: transactionList.length + 1,
        type: "Income",
        amount: income,
        source: incomeType,
        date: date,
        note: note,
      },
    });
  };
  const addExpense = (expense, expenseType, expenseDate, expenseNote) => {
    dispatchTransactionList({
      type: "ADD_EXPENSE",
      payload: {
        id: Date.now(),
        srNo: transactionList.length + 1,
        type: "Expense",
        amount: expense,
        source: expenseType,
        date: expenseDate,
        note: expenseNote,
      },
    });
  };

  const deleteTransaction = (trancationId) => {
    dispatchTransactionList({
      type: "DELETE_TRANSACTION",
      payload: {
        trancationId,
      },
    });
  };

  return (
    <TransactionListContext.Provider
      value={{ transactionList, addIncome, addExpense, deleteTransaction }}
    >
      {children}
    </TransactionListContext.Provider>
  );
};
export default TransactionListProvider;
