import React from "react";
import "./Menu.css";

const Menu = ({ clearWalls, resetGrid, runAlgorithm }) => {
  const [algorithm, setAlgorithm] = React.useState("bfs");

  function selectAlgorithm() {}

  return (
    <div className="menu">
      <button className="reset-btn" onClick={resetGrid}>
        Reset Grid
      </button>
      <button className="clear-btn" onClick={clearWalls}>
        Clear Walls
      </button>

      <select
        value={algorithm}
        onChange={({ target }) => setAlgorithm(target.value)}
      >
        <option value="dfs">DFS</option>
        <option value="bfs">BFS</option>
        <option value="dijkstra">Dijkstra</option>
      </select>
      <button className="run-btn" onClick={() => runAlgorithm(algorithm)}>
        Run
      </button>
      <button className="help-btn">Help</button>
    </div>
  );
};

export default Menu;
