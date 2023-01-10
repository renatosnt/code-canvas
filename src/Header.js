import React from "react";
import "./Header.css";
import logo from "./img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={logo}></img>
      <h1 className="title">Pathfinding Visualizer</h1>
    </header>
  );
};

export default Header;
