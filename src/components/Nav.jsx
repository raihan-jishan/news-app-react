/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../css/nav.css";

const Nav = () => {
  //  use State
  const [click, setClick] = useState(false);
  //  handleClick func
  const handleClick = () => setClick(!click);
  //  close Mobile menu
  const closeMobileMenu = () => setClick(false);
  return (
    <div  >
      <header id="header" onClick={handleClick}>
        <div className="logo" onClick={closeMobileMenu}>
          Navbar
        </div>
        <div className="hamburger" onClick={handleClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        {/* navbar  */}
        <nav className={click ? "navbar active" : "navbar"}>
          <ul>
            <li>
              <NavLink
                to={"/"}
                className={(navInfo) => (navInfo.isActive ? "active" : "")}
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to={"/business"}>Business</NavLink>
            </li>
            <li>
              <NavLink to={"/entertainment"}>Entertainment</NavLink>
            </li>
            <li>
              <NavLink to={"/general"}>General</NavLink>
            </li>
            <li>
              <NavLink to={"/health"}>Health</NavLink>
            </li>
            <li>
              <NavLink to={"/science"}>Science</NavLink>
            </li>
            <li>
              <NavLink to={"/sports"}>Sports</NavLink>
            </li>
            <li>
              <NavLink to={"/technology"}>Technology</NavLink>
            </li>
            {/*  settings */}
            <li className="settings">
            <NavLink to={"/setting/user/valid-user-uru4qw3e4"}><i className="fa-solid fa-gear"></i></NavLink>
            
            </li>
          </ul>
        </nav>
        {/* navbar end  */}
      </header>
    </div>
  );
};

export default Nav;
