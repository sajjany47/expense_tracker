import React from "react";
import ExpenseList from "../ExpenseList/ExpenseList";
import "../Home/Home.css";
import TopFold from "../TopFold/TopFold";

function Home() {
  return (
    <div className="home">
      <TopFold />
      <ExpenseList />
    </div>
  );
}

export default Home;
