import React from "react";
import Node from "./Node";
import "./Grid.css";

const Grid = () => {
  const [gridSize, setGridSize] = React.useState([15, 25]);
  const [start, setStart] = React.useState([5, 0]);
  const [finish, setFinish] = React.useState([5, 25]);

  const [grid, setGrid] = React.useState(gridConstructor());

  function nodeConstructor(row, col) {
    const node = {
      row,
      col,
      isStart: row === start[0] && col === start[1],
      isFinish: row === finish[0] && col === finish[1],
      isWall: false,
    };
    return node;
  }

  function gridConstructor() {
    const initialGrid = [];
    const sizeRows = gridSize[0];
    const sizeCols = gridSize[1];

    for (let i = 0; i <= sizeRows; i++) {
      const row = [];
      for (let j = 0; j <= sizeCols; j++) {
        row.push(nodeConstructor(i, j));
      }
      initialGrid.push(row);
    }
    return initialGrid;
  }

  return (
    <table className="grid">
      <tbody>
        {grid.map((row, i) => (
          <tr key={i}>
            {row.map((node) => (
              <Node {...node} key={node.col} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
