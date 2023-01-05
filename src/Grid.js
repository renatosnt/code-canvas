import React from "react";
import Node from "./Node";
import "./Grid.css";

const Grid = () => {
  const [gridSize, setGridSize] = React.useState([15, 25]);
  const [start, setStart] = React.useState([5, 0]);
  const [finish, setFinish] = React.useState([5, 25]);
  const [isDrawing, setIsDrawing] = React.useState(false);

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

  function isStartOrFinish(row, col) {
    return (
      (row === start[0] && col === start[1]) ||
      (row === finish[0] && col === finish[1])
    );
  }

  function handleIsPressed(row, col) {
    if (isStartOrFinish(row, col)) {
      // TODO se é start ou finish, move eles de lugar
      // é start ou finish, logo, movimenta eles
    } else {
      setIsDrawing(true);
    }
  }

  function handleMouseUp(row, col) {
    console.log(row, col);
    if (isStartOrFinish(row, col)) {
      // TODO se é start ou finish, coloca eles no lugar
      // é start ou finish, logo, movimenta eles
    } else {
      setIsDrawing(false);
    }
  }

  function handleMouseEnter(row, col) {
    if (isDrawing && !isStartOrFinish(row, col)) {
      const newGrid = grid;
      newGrid[row][col].isWall = true;
      setGrid(newGrid);
      // TODO o estado do grid precisa ser atualizado sempre que uma nova parede é adicionada
    }
  }

  return (
    <table className="grid">
      <tbody>
        {grid.map((row, i) => (
          <tr key={i}>
            {row.map((node) => (
              <Node
                {...node}
                key={node.col}
                isPressed={() => handleIsPressed(node.row, node.col)} // desenhar ou mover nós
                onMouseUp={() => handleMouseUp(node.row, node.col)} // parar de desenhar ou colocar nós
                onMouseEnter={() => handleMouseEnter(node.row, node.col)}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Grid;
