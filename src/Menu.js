import React from "react";
import "./Menu.css";
const Menu = ({ clearGrid }) => {
  return (
    <div className="menu">
      <button>Clear Grid</button>
      <button onClick={clearGrid}>Clear Walls</button>
      <select>
        <option>Dijkstra</option>
        <option>DFS</option>
        <option>BFS</option>
      </select>
      <button>Run</button>
      <button>Help</button>
    </div>
  );
};

export default Menu;
