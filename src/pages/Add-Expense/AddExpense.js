import React from "react";
import AddForm from "../AddForm/AddForm";
import TopFold from "../TopFold/TopFold";
import "./AddExpense.css";

function AddExpense() {
  return (
    <div className="add-expense">
      <TopFold />
      <AddForm />
    </div>
  );
}

export default AddExpense;
