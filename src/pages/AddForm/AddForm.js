import React, { useState } from "react";
import "./AddForm.css";
import { categories } from "../constant/Contants";
import { useDispatch } from "react-redux";
import { addExpense } from "../../redux/actions/expenses";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SuccessModal from "./SuccessModal";

function AddForm() {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };
  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };
  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter valid data!");
      notify();
      return;
    }
    const data = {
      title: title,
      amount: amount,
      category: category,
      createdAt: new Date(),
    };
    dispatch(addExpense(data));
    setModalOpen(true);
  };
  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input
          className="amount-input"
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="form-item">
        <label>Amount ₹</label>
        <input
          placeholder="Enter Amount"
          value={amount}
          onChange={handleAmount}
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div
            className="category-dropdown"
            onClick={() => setCategoryOpen(!categoryOpen)}
          >
            <label>{category ? category.title : "cateogry"}</label>
            <i class="fa-solid fa-chevron-down"></i>
          </div>
          {categoryOpen && (
            <div className="category-container">
              {cat.map((category) => (
                <div
                  className="category-item"
                  style={{ borderRight: `5px solid ${category.color}` }}
                  key={category.id}
                  onClick={() => handleCategory(category)}
                >
                  <label>{category.title}</label>
                  <img src={category.icon} alt={category.title} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
        </div>
      </div>
    </div>
  );
}

export default AddForm;
