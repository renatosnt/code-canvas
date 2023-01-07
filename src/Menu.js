import React from "react";
import "./Menu.css";

const Menu = ({ clearWalls, resetGrid, runAlgorithm }) => {
  return (
    <div className="menu">
      <button onClick={resetGrid}>Reset Grid</button>
      <button onClick={clearWalls}>Clear Walls</button>
      <select>
        <option>Dijkstra</option>
        <option>DFS</option>
        <option>BFS</option>
      </select>
      <button onClick={() => runAlgorithm("dfs")}>Run</button>
      <button>Help</button>
    </div>
  );
};

export default Menu;
