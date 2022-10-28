import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./pages/Add-Expense/AddExpense";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/AddExpense" element={<AddExpense />} />
      </Routes>
    </Router>
  );
}

export default App;
