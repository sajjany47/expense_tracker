import React, { useState } from "react";
import "./TopFold.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { searchExpense } from "../../redux/actions/expenses";

function TopFold() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };
  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="serachbar">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>
          <Link to="/AddExpense">
            <div className="add-button">
              <i class="fa-solid fa-circle-plus"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fa-solid fa-angle-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <Link to="/">
            <div className="add-topfold-button">
              <i class="fa-solid fa-circle-xmark"></i>
              <label>Cancel</label>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default TopFold;
