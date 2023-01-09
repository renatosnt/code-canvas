import React from "react";
import "./Menu.css";

const Menu = ({
  clearWalls,
  resetGrid,
  runAlgorithm,
  openHelp,
  setOpenHelp,
}) => {
  const [algorithm, setAlgorithm] = React.useState("dfs");

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
      <button className="help-btn" onClick={() => setOpenHelp(!openHelp)}>
        Help
      </button>
    </div>
  );
};

export default Menu;
