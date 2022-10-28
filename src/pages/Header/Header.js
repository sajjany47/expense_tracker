import React from "react";
import "../Header/Header.css";

function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Xpenser <i class="fa-solid fa-credit-card"></i>
        </div>
        <div className="header-button">
          <a href="https://github.com/" target="_blank">
            <i class="fa-brands fa-github"></i> Star
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
