import React from "react";
import "./Menu.css";

const Menu = ({
  clearWalls,
  resetGrid,
  runAlgorithm,
  openHelp,
  setOpenHelp,
  warningState,
}) => {
  const [algorithm, setAlgorithm] = React.useState("bfs");

  return (
    <div className="menu">
      <button
        className={warningState ? "reset-btn warning" : "reset-btn"}
        onClick={resetGrid}
      >
        Reset Grid
      </button>
      <button className="clear-btn" onClick={clearWalls}>
        Clear Walls
      </button>

      <select
        value={algorithm}
        onChange={({ target }) => setAlgorithm(target.value)}
      >
        <option value="bfs">BFS</option>
        <option value="dfs">DFS</option>
        {/* <option value="dijkstra">Dijkstra</option> */}
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
