import "./Header.css";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";

import logo from "../../assets/shared/desktop/logo.svg";
import menuButton from "../../assets/shared/mobile/menu.svg";
import closeMenuButton from "../../assets/shared/mobile/close.svg";

function Header() {
  useEffect(() => {
    const menuBtn = document.querySelector(".menu-button");
    const dropdownNav = document.querySelector(".dropdown-nav");
    const dropDownAnchor = document.querySelectorAll(".anchor");

    let isAnimating = false;

    menuBtn.addEventListener("click", () => {
      if (isAnimating) return;
      isAnimating = true;
      menuBtnChange();
      toggleDropDown();
    });

    dropDownAnchor.forEach((anchor) => {
      anchor.addEventListener("click", () => {
        if (isAnimating) return;
        isAnimating = true;
        menuBtnChange();
        toggleDropDown();
      });
    });

    function toggleDropDown() {
      if (dropdownNav.classList.contains("show")) {
        dropdownNav.classList.add("fade-out");
        setTimeout(() => {
          dropdownNav.classList.remove("show");
          dropdownNav.classList.remove("fade-out");
          isAnimating = false;
        }, 300);
      } else {
        dropdownNav.classList.add("fade-in");
        dropdownNav.classList.add("show");
        setTimeout(() => {
          dropdownNav.classList.remove("fade-in");
          isAnimating = false;
        }, 300);
      }
    }

    function menuBtnChange() {
      if (menuBtn.src.includes(menuButton)) {
        menuBtn.src = closeMenuButton;
        menuBtn.style.width = "16px";
        menuBtn.style.height = "15px";
      } else {
        menuBtn.src = menuButton;
        menuBtn.style.width = "20px";
        menuBtn.style.height = "6px";
      }
    }
  });

  return (
    <>
      <header>
        <Link to="/">
          <img src={logo} />
        </Link>
        <nav className="main-nav">
          <Link to="/Stories">
            <p>STORIES</p>
          </Link>
          <Link to="/Features">
            <p>FEATURES</p>
          </Link>
          <Link to="/Pricing">
            <p>PRICING </p>
          </Link>
        </nav>

        <button className="invite-button">
          <p>GET AN INVITE</p>
        </button>

        <img className="menu-button" src={menuButton} />
        <nav className="dropdown-nav">
          <Link to="/Stories">
            <p className="anchor">STORIES</p>
          </Link>
          <Link to="/Features">
            <p className="anchor">FEATURES</p>
          </Link>
          <Link to="/Pricing">
            <p className="anchor">PRICING </p>
          </Link>

          <span></span>

          <button className="invite-button-2">
            <p>GET AN INVITE</p>
          </button>
        </nav>
      </header>
    </>
  );
}

export default Header;
