import React from "react";
import { useSelector } from "react-redux";
import Card from "./Card";
import "./ExpenseList.css";
import { ToastContainer, toast } from "react-toastify";

function ExpenseList() {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query));
  const notifySuccess = () => toast.success("Expense Deleted");
  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="Empty List"
            className="empty-image"
          />
          <label>Uh Oh! Expense list is empty</label>
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
